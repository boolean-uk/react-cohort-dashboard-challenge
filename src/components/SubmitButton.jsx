import { stringProp } from "@utilities/propTypeDefs";

export default function SubmitButton({ innerText }) {
      return <button className="rounded-lg p-4 px-8 bg-cohort-blue text-cohort-bg-highlight">{innerText}</button>;
}

SubmitButton.propTypes = { innerText: stringProp };
