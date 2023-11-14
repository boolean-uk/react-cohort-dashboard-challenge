import { useEffect, useState } from "react";

import ProfileFormSection from "./components/ProfileFormSection";

import SubmitButton from "@components/SubmitButton";

import api from "@utilities/api";
import {
  profileInitialForm,
  profileSections,
  profileSectionsFlat,
} from "@utilities/formTemplates";
import { checkFormValidity } from "@utilities/object";
import { contactProps } from "@utilities/propTypeDefs";

export default function ProfileForm({ profile }) {
  const [formData, setFormData] = useState({
    ...profileInitialForm,
    ...profile,
  });
  const [validInput, setValidInput] = useState(true);
  const [submitted, setSubmitted] = useState(null);

  useEffect(() => {
    const formValid = checkFormValidity(formData, profileSectionsFlat);
    setValidInput(formValid);
  }, [formData]);

  function handleSubmit(e) {
    e.preventDefault();

    if (validInput) {
      const payload = { ...formData };
      for (const property in payload) {
        if (payload[property] === "") {
          delete payload[property];
        }
      }

      api.contact.put(profile.id, payload)

      setSubmitted(true);
    } else {
      setSubmitted(false);
    }
  }

  return (
    <form className="profile-form" onSubmit={handleSubmit}>
      {profileSections.map((section) => (
        <ProfileFormSection
          key={`section-${section.title}`}
          formData={formData}
          section={section}
          setFormData={setFormData}
          submitted={submitted}
        />
      ))}
      <SubmitButton submitted={submitted} innerText={"Save"}/>
    </form>
  );
}

ProfileForm.propTypes = {
  profile: contactProps,
};
