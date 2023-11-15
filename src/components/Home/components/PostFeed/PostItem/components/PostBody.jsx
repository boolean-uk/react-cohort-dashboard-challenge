import { useEffect, useState } from "react";

import SubmitButton from "@components/SubmitButton";
import TextInput from "@components/TextInput";

import api from "@utilities/api";
import { editPostFormSetup } from "@utilities/formTemplates";
import { checkFormValidity } from "@utilities/object";
import { stringProp } from "@utilities/propTypeDefs";

export default function PostBody({
  post,
  editablePost,
  field,
  formData,
  setEditablePost,
  setFormData,
  setLoadPosts,
  setShowItemMenu,
  setSubmitted,
  submitted,
}) {
  const [validInput, setValidInput] = useState(true);

  const { charLimit, inputName, placeholderText, required } = field;

  useEffect(() => {
    const formValid = checkFormValidity(formData, editPostFormSetup);
    setValidInput(formValid);
  }, [formData]);

  function handleSubmit(e) {
    e.preventDefault();

    if (validInput) {
      const payload = {...formData}
      payload.contactId = post.contactId
      setSubmitted(true)
      setEditablePost(false)
      setShowItemMenu(false)
    } else {
      console.log("no")
      setSubmitted(false)
    }
  }

  return (
    <>
      {editablePost ? (
        <form onSubmit={handleSubmit} className="flex gap-4 pr-28">
          <TextInput
            charLimit={charLimit}
            formData={formData}
            inputName={inputName}
            placeholderText={placeholderText}
            required={required}
            setFormData={setFormData}
            submitted={submitted}
          />
          <SubmitButton innerText={"Edit"} submitted={submitted}/>
        </form>
      ) : (
        <div className="post-body">{post.content}</div>
      )}
    </>
  );
}

PostBody.propTypes = { content: stringProp };
