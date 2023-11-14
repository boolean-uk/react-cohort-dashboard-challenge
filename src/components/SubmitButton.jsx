import { boolProps, stringProp } from "@utilities/propTypeDefs";

export default function SubmitButton({ innerText, submitted }) {
  return (
    <button
      className={`rounded-lg bg-cohort-blue p-4 px-16 text-cohort-bg-highlight hover:bg-cohort-green hover:drop-shadow ${
        (submitted === true && "bg-cohort-green") ||
        (submitted === false && "bg-red-400")
      }`}
    >
    {/* TODO: button should revert to innerText after form input */}
      {(submitted === true && "✓") || (submitted === false && "✗") || innerText}
    </button>
  );
}

SubmitButton.propTypes = { innerText: stringProp, submitted: boolProps };
