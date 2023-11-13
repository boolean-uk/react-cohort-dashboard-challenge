import { useState } from "react";

import ProfileFormSection from "./components/ProfileFormSection";

import { reduceForm } from "@utilities/object";
import {
  flatProfileTemplate,
  profileTemplate,
} from "@utilities/profileTemplate";

const INITIAL_FORM = reduceForm(flatProfileTemplate);

export default function ProfileForm() {
  const [formData, setFormData] = useState(INITIAL_FORM);
  return (
    <form className="profile-form">
      {profileTemplate.map((section, index) => (
        <ProfileFormSection
          formData={formData}
          section={section}
          setFormData={setFormData}
        />
      ))}
    </form>
  );
}
