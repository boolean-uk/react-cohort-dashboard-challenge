import { funcProp, objectProp, stringProp } from "@utilities/propTypeDefs";

export default function TextInput({
  formData,
  setFormData,
  inputName,
  placeholderText,
}) {
  const value = formData[inputName];

  function handleChange(e) {
    setFormData({ ...formData, [inputName]: e.target.value });
  }

  return (
    <input
      name={inputName}
      type="text"
      placeholder={placeholderText}
      onChange={handleChange}
      value={value}
    />
  );
}

TextInput.propTypes = {
  formData: objectProp,
  setFormData: funcProp,
  inputName: stringProp,
  placeholderText: stringProp,
};
