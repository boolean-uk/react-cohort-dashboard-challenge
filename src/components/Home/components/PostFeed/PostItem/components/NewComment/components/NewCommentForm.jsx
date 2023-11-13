import { useEffect, useState } from "react";

import NewCommentSubmit from "./NewCommentSubmit";

import TextInput from "@components/TextInput";

import api from "@utilities/api";
import { contactProps, funcProp, numberProp } from "@utilities/propTypeDefs";

//TODO: kinda repeating myself here... I expect you to handle this future Edd...

const FORM_SETUP = [
  {
    inputName: "content",
    placeholderText: "Add a comment...",
    charLimit: 180,
    required: true,
  },
];

const INITIAL_FORM = FORM_SETUP.reduce(
  (obj, entry) => ((obj[entry.inputName] = ""), obj),
  {},
);

export default function NewCommentForm({ postId, setLoadComments, user }) {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [validInput, setValidInput] = useState(true);
  const [submitted, setSubmitted] = useState(null);

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
      payload.postId = postId;
      payload.contactId = user.id;

      console.log("payload", payload);

      api.post.comment.post(postId, payload).then(() => setLoadComments(true));

      setFormData(INITIAL_FORM);
      setSubmitted(true);
    } else {
      setSubmitted(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="new-comment-form flex bg-cohort-shade"
    >
      {FORM_SETUP.map((field, index) => {
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
