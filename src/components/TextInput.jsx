import {
  boolProps,
  funcProp,
  numberProp,
  objectProp,
  stringProp,
} from "@utilities/propTypeDefs";

function getColorClass(colorShade) {
  const colorClasses = {
    300: "text-red-300",
    400: "text-red-400",
    500: "text-red-500",
    600: "text-red-600",
  };

  return colorClasses[colorShade] || "";
}

export default function TextInput({
  charLimit,
  formData,
  inputName,
  placeholderText,
  required,
  setFormData,
  submitted,
}) {
  const value = formData[inputName];

  const colorShade =
    900 - Math.floor(((charLimit * 400) / value.length - 100) / 100) * 100;

  function handleChange(e) {
    if (e.target.value.length <= charLimit)
      setFormData({ ...formData, [inputName]: e.target.value });
  }

  return (
    <div id={`new-post-${inputName}`} className="relative flex grow">
      <input
        name={inputName}
        type="text"
        placeholder={placeholderText}
        onChange={handleChange}
        value={value}
        className={`grow rounded-lg border border-cohort-shade bg-cohort-shade p-4 ${
          submitted === false && value.length === 0 && required && "border-red-400"
        }`}
      />
      <div
        className={`absolute bottom-0 right-1 text-xs ${getColorClass(
          colorShade,
        )}`}
      >
        {value.length ? value.length : null}
        {value.length && charLimit ? ` / ${charLimit}` : null}
      </div>
    </div>
  );
}

TextInput.propTypes = {
  charLimit: numberProp,
  formData: objectProp,
  inputName: stringProp,
  placeholderText: stringProp,
  required: boolProps,
  setFormData: funcProp,
  submitted: boolProps,
};
