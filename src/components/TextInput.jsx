import { funcProp, objectProp, stringProp } from "@utilities/propTypeDefs";

export default function TextInput({
  formData,
  inputName,
  placeholderText,
  setFormData,
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
      className="rounded-lg bg-cohort-shade p-4"
      id={`new-post-${inputName}`}
    />
  );
}

TextInput.propTypes = {
  formData: objectProp,
  inputName: stringProp,
  placeholderText: stringProp,
  setFormData: funcProp,
};
