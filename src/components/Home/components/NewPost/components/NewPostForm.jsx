import { useState } from "react";

import SubmitButton from "@components/SubmitButton";
import TextInput from "@components/TextInput";

import api from "@utilities/api";
import { contactProps, funcProp } from "@utilities/propTypeDefs";

const FORM_SETUP = [
  {
    inputName: "title",
    placeholderText: "Title",
  },
  {
    inputName: "content",
    placeholderText: "What's on your mind?",
  },
];

const INITIAL_FORM = FORM_SETUP.reduce(
  (obj, entry) => ((obj[entry.inputName] = ""), obj),
  {},
);

export default function NewPostForm({ setLoadPosts, user }) {
  const [formData, setFormData] = useState(INITIAL_FORM);

  function handleSubmit(e) {
    e.preventDefault();

    const payload = { ...formData };
    payload.contactId = user.id;

    api.post.post(payload).then(() => setLoadPosts(true));

    setFormData(INITIAL_FORM)
  }

  return (
    <form className="new-post-form" onSubmit={handleSubmit}>
      {FORM_SETUP.map((field, index) => (
        <TextInput
          key={`new-post-${index}`}
          formData={formData}
          setFormData={setFormData}
          inputName={field.inputName}
          placeholderText={field.placeholderText}
        />
      ))}
      <SubmitButton innerText={"Post"} />
    </form>
  );
}

NewPostForm.propTypes = {
  setLoadPosts: funcProp,
  user: contactProps,
};
