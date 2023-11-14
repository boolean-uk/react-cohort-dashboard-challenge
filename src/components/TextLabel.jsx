import { boolProps, funcProp, objectProp } from "@utilities/propTypeDefs";
import TextInput from "./TextInput";

export default function TextLabel({ field, formData, setFormData, submitted }) {
  const { charLimit, inputName, placeholderText, required, title } = field;
  return (
    <label>
      {title}
      {required && "*"}
      <TextInput
        charLimit={charLimit}
        formData={formData}
        inputName={inputName}
        placeholderText={placeholderText}
        required={required}
        setFormData={setFormData}
        submitted={submitted}
      />
    </label>
  );
}

TextLabel.propTypes = {
  field: objectProp,
  formData: objectProp,
  setFormData: funcProp,
  submitted: boolProps,
};
