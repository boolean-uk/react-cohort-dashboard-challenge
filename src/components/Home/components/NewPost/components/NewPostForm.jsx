import { useState } from "react";

import SubmitButton from "@components/SubmitButton";
import TextInput from "@components/TextInput";

import api from "@utilities/api";
import { contactProps, funcProp } from "@utilities/propTypeDefs";

import "./NewPostForm.css"

const FORM_SETUP = [
  {
    inputName: "content",
    placeholderText: "What's on your mind?",
    charLimit: null,
  },
  {
    inputName: "title",
    placeholderText: "Give your post a title!",
    charLimit: 80,
    basis: "1/5",
  },
];

const INITIAL_FORM = FORM_SETUP.reduce(
  (obj, entry) => ((obj[entry.inputName] = ""), obj),
  {},
);

export default function NewPostForm({ setLoadPosts, user }) {
  const [formData, setFormData] = useState(INITIAL_FORM);

  const formHasInput = Object.values(formData).some(
    (input) => input.length > 0,
  );

  function handleSubmit(e) {
    e.preventDefault();

    const payload = { ...formData };
    payload.contactId = user.id;

    api.post.post(payload).then(() => setLoadPosts(true));

    setFormData(INITIAL_FORM);
  }

  return (
    <form className="new-post-form grid grow gap-2" onSubmit={handleSubmit}>
      {FORM_SETUP.map((field, index) => {
        if (field.inputName === "content" || formHasInput)
          return (
            <TextInput
              key={`new-post-${index}`}
              formData={formData}
              setFormData={setFormData}
              inputName={field.inputName}
              placeholderText={field.placeholderText}
              basis={field.basis}
            />
          );
      })}
      <SubmitButton innerText={"Post"} htmlId="new-post-submit"/>
    </form>
  );
}

NewPostForm.propTypes = {
  setLoadPosts: funcProp,
  user: contactProps,
};
