import {
  funcProp,
  numberProp,
  objectProp,
  stringProp,
} from "@utilities/propTypeDefs";

export default function TextInput({
  charLimit,
  formData,
  inputName,
  placeholderText,
  setFormData,
}) {
  const value = formData[inputName];

  function getColorClass(colorShade) {
    const colorClasses = {
      300: "text-red-300",
      400: "text-red-400",
      500: "text-red-500",
      600: "text-red-600",
    };

    return colorClasses[colorShade] || "";
  }

  const colorShade =
    900 - Math.floor(((charLimit * 400) / value.length - 100) / 100) * 100;

  if (inputName === "content") console.log("colorShade", colorShade);

  function handleChange(e) {
    if (e.target.value.length <= charLimit)
      setFormData({ ...formData, [inputName]: e.target.value });
  }

  console.log("value.length, charLimit / 2", value.length, charLimit / 2);

  return (
    <div id={`new-post-${inputName}`} className="relative flex ">
      <input
        name={inputName}
        type="text"
        placeholder={placeholderText}
        onChange={handleChange}
        value={value}
        className="grow rounded-lg bg-cohort-shade p-4"
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
  setFormData: funcProp,
};
