import { stringProp } from "@utilities/propTypeDefs";

export default function SubmitButton({ innerText }) {
  return <button>{innerText}</button>;
}

SubmitButton.propTypes = { innerText: stringProp };
