import { stringProp } from "@utilities/propTypeDefs";

export default function SubmitButton({ innerText }) {
  return (
    <button className="rounded-lg bg-cohort-blue p-4 px-8 text-cohort-bg-highlight">
      {innerText}
    </button>
  );
}

SubmitButton.propTypes = { innerText: stringProp };
