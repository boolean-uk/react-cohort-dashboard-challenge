import { funcProp, objectProp } from "@utilities/propTypeDefs";
import TextInput from "./TextInput";

export default function TextLabel({ field, formData, setFormData }) {
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
        setFormData={setFormData}
      />
    </label>
  );
}

TextLabel.propTypes = {
  field: objectProp,
  formData: objectProp,
  setFormData: funcProp,
};
