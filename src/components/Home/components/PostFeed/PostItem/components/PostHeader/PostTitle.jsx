import SubmitButton from "@components/SubmitButton";
import TextInput from "@components/TextInput";
import { numberProp, stringProp } from "@utilities/propTypeDefs";
import { Link } from "react-router-dom";

export default function PostTitle({
  editablePost,
  field,
  formData,
  postId,
  setFormData,
  submitted,
  title,
}) {
  const { charLimit, inputName, placeholderText, required } = field;

  return (
    <>
      {editablePost ? (
        <div className="pr-28">
          <TextInput
            charLimit={charLimit}
            formData={formData}
            inputName={inputName}
            placeholderText={placeholderText}
            required={required}
            setFormData={setFormData}
            submitted={submitted}
          />
        </div>
      ) : (
        <h3 className="post-title text-sm font-bold text-cohort-title">
          <Link to={`/post/${postId}`}>{title}</Link>
        </h3>
      )}
    </>
  );
}

PostTitle.propTypes = {
  postId: numberProp,
  title: stringProp,
};
