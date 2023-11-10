import { useState } from "react";

import SubmitButton from "@components/SubmitButton";
import TextInput from "@components/TextInput";

const INITIAL_FORM = {
  content: ""
}

export default function NewPostForm() {
  const [formData, setFormData] = useState(INITIAL_FORM)

  function handleSubmit(e) {
    e.preventDefault()
    console.log('formData', formData)
  }

  return (
    <form className="new-post-form" onSubmit={handleSubmit}>
      <TextInput formData={formData} setFormData={setFormData} inputName="content" placeholderText={"What's on your mind?"} />
      <SubmitButton innerText={"Post"} />
    </form>
  );
}
