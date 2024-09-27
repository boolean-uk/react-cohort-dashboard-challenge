import { useEffect, useState } from "react";

import NewCommentSubmit from "./NewCommentSubmit";

import TextInput from "@components/TextInput";

import api from "@utilities/api";
import { checkFormValidity } from "@utilities/object";
import { contactProps, funcProp, numberProp } from "@utilities/propTypeDefs";
import {
  newCommentFormSetup,
  newCommentInitialForm,
} from "@utilities/formTemplates";

//TODO: kinda repeating myself here... I expect you to handle this future Edd...

export default function NewCommentForm({ postId, setLoadComments, user }) {
  const [formData, setFormData] = useState(newCommentInitialForm);
  const [validInput, setValidInput] = useState(true);
  const [submitted, setSubmitted] = useState(null);

  useEffect(() => {
    const formValid = checkFormValidity(formData, newCommentFormSetup);

    setValidInput(formValid);
  }, [formData]);

  function handleSubmit(e) {
    e.preventDefault();

    if (validInput) {
      const payload = { ...formData };
      payload.postId = postId;
      payload.contactId = user.id;

      api.post.comment.post(postId, payload).then(() => setLoadComments(true));

      setFormData(newCommentInitialForm);
      setSubmitted(true);
    } else {
      setSubmitted(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="new-comment-form flex grow items-center gap-x-2 rounded-lg bg-cohort-shade pr-2 "
    >
      {newCommentFormSetup.map((field, index) => {
        return (
          <TextInput
            key={`post-${postId}-new-comment-${index}`}
            charLimit={field.charLimit}
            formData={formData}
            inputName={field.inputName}
            placeholderText={field.placeholderText}
            setFormData={setFormData}
            submitted={submitted}
          />
        );
      })}
      <NewCommentSubmit submitted={submitted} />
    </form>
  );
}

NewCommentForm.propTypes = {
  postId: numberProp,
  setLoadComments: funcProp,
  user: contactProps,
};
