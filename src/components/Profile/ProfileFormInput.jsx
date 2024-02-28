import "@styles/PostInput.css";

export default function ProfileFormInput({ name, required = false }) {
  const result = name.replace(/\s/g, "");
  return (
    <>
      <label className="cm-input-label" htmlFor={result}>{`${
        required ? name + "*" : name
      }`}</label>
      <input className="cm-input" name={result} />
    </>
  );
}
