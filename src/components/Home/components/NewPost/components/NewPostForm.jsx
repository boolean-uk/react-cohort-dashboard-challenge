import { useEffect, useState } from "react";

import SubmitButton from "@components/SubmitButton";
import TextInput from "@components/TextInput";

import api from "@utilities/api";
import { newPostFormSetup, newPostInitialForm } from "@utilities/formTemplates";
import { checkFormValidity } from "@utilities/object";
import { contactProps, funcProp } from "@utilities/propTypeDefs";

import "./NewPostForm.css";

export default function NewPostForm({ setLoadPosts, user }) {
  const [formData, setFormData] = useState(newPostInitialForm);
  const [validInput, setValidInput] = useState(true);
  const [submitted, setSubmitted] = useState(null);

  const formHasInput = Object.values(formData).some(
    (input) => input.length > 0,
  );

  useEffect(() => {
    const formValid = checkFormValidity(formData, newPostFormSetup)

    setValidInput(formValid);
  }, [formData]);

  function handleSubmit(e) {
    e.preventDefault();

    if (validInput) {
      const payload = { ...formData };
      payload.contactId = user.id;

      api.post.post(payload).then(() => setLoadPosts(true));

      setFormData(newPostInitialForm);
      setSubmitted(true);
    } else {
      setSubmitted(false);
    }
  }

  return (
    <form
      className={`new-post-form grid grow gap-x-2 ${formHasInput && "gap-y-2"}`}
      onSubmit={handleSubmit}
    >
      {newPostFormSetup.map((field, index) => {
        if (field.inputName === "content" || formHasInput)
          return (
            <TextInput
              key={`new-post-${index}`}
              charLimit={field.charLimit}
              formData={formData}
              inputName={field.inputName}
              placeholderText={field.placeholderText}
              setFormData={setFormData}
              submitted={submitted}
            />
          );
      })}
      <SubmitButton
        innerText={"Post"}
        submitted={submitted}
      />
    </form>
  );
}

NewPostForm.propTypes = {
  setLoadPosts: funcProp,
  user: contactProps,
};
