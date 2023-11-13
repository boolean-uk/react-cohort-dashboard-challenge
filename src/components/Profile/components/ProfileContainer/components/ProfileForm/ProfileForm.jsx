import { useState } from "react";

import ProfileFormSection from "./components/ProfileFormSection";

import { reduceForm } from "@utilities/object";
import {
  profileInitialForm,
  profileSections,
  profileSectionsFlat,
} from "@utilities/formTemplates";

export default function ProfileForm() {
  const [formData, setFormData] = useState(profileInitialForm);
  return (
    <form className="profile-form">
      {profileSections.map((section, index) => (
        <ProfileFormSection
          formData={formData}
          section={section}
          setFormData={setFormData}
        />
      ))}
    </form>
  );
}
