import { useEffect, useState } from "react";

import SubmitButton from "@components/SubmitButton";
import TextInput from "@components/TextInput";

import { checkFormValidity } from "@utilities/object";
import {
  arrayProp,
  boolProps,
  funcProp,
  objectProp,
} from "@utilities/propTypeDefs";

export default function EditItemForm({
  formSetup,
  formData,
  putRequest,
  setEditableItem,
  setFormData,
  setLoadItem,
  setShowItemMenu,
  setSubmitted,
  submitted,
}) {
  const [validInput, setValidInput] = useState(true);

  useEffect(() => {
    const formValid = checkFormValidity(formData, formSetup);

    setValidInput(formValid);
  }, [formData, formSetup]);

  function handleSubmit(e) {
    e.preventDefault();

    if (validInput) {
      const payload = { ...formData };
      putRequest(payload).then(() => setLoadItem(true));
      setSubmitted(true);
      setEditableItem(false);
      setShowItemMenu(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 pr-28">
      {formSetup.map((entry, index) => (
        <TextInput
          key={`edit-item-${formData.id}-${index}`}
          charLimit={entry.charLimit}
          formData={formData}
          inputName={entry.inputName}
          placeholderText={entry.placeholderText}
          required={entry.required}
          setFormData={setFormData}
          submitted={submitted}
        />
      ))}
      <SubmitButton innerText={"Edit"} submitted={submitted} />
    </form>
  );
}

EditItemForm.propTypes = {
  formSetup: arrayProp,
  formData: objectProp,
  putRequest: funcProp,
  setEditableItem: funcProp,
  setFormData: funcProp,
  setLoadItem: funcProp,
  setShowItemMenu: funcProp,
  setSubmitted: funcProp,
  submitted: boolProps,
};
