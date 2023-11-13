import { boolProps, stringProp } from "@utilities/propTypeDefs";

export default function SubmitButton({ innerText, submitted }) {
  return (
    <button
      className={`rounded-lg bg-cohort-blue p-4 px-16 text-cohort-bg-highlight ${
        (submitted === true && "bg-green-400") ||
        (submitted === false && "bg-red-400")
      }`}
    >
      {innerText}
    </button>
  );
}

SubmitButton.propTypes = { innerText: stringProp, submitted: boolProps };
