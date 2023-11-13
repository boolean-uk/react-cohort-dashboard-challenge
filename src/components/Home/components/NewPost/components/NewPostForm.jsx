import { useEffect, useState } from "react";

import SubmitButton from "@components/SubmitButton";
import TextInput from "@components/TextInput";

import api from "@utilities/api";
import { contactProps, funcProp } from "@utilities/propTypeDefs";

import "./NewPostForm.css";

const FORM_SETUP = [
  {
    inputName: "content",
    placeholderText: "What's on your mind?",
    charLimit: 240,
    required: true,
  },
  {
    inputName: "title",
    placeholderText: "Give your post a title!",
    charLimit: 80,
    required: true,
  },
];

const INITIAL_FORM = FORM_SETUP.reduce(
  (obj, entry) => ((obj[entry.inputName] = ""), obj),
  {},
);

export default function NewPostForm({ setLoadPosts, user }) {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [validInput, setValidInput] = useState(true);
  const [submitted, setSubmitted] = useState(null);

  const formHasInput = Object.values(formData).some(
    (input) => input.length > 0,
  );

  useEffect(() => {
    const formValid = FORM_SETUP.every((entry) => {
      const { inputName, required } = entry;
      if (formData[inputName].length > 0 || !required) return true;
    });

    setValidInput(formValid);
  }, [formData]);

  function handleSubmit(e) {
    e.preventDefault();

    if (validInput) {
      const payload = { ...formData };
      payload.contactId = user.id;

      api.post.post(payload).then(() => setLoadPosts(true));

      setFormData(INITIAL_FORM);
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
      {FORM_SETUP.map((field, index) => {
        if (field.inputName === "content" || formHasInput)
          return (
            <TextInput
              key={`new-post-${index}`}
              formData={formData}
              setFormData={setFormData}
              inputName={field.inputName}
              placeholderText={field.placeholderText}
              charLimit={field.charLimit}
              submitted={submitted}
            />
          );
      })}
      <SubmitButton
        innerText={"Post"}
        htmlId="new-post-submit"
        submitted={submitted}
      />
    </form>
  );
}

NewPostForm.propTypes = {
  setLoadPosts: funcProp,
  user: contactProps,
};
