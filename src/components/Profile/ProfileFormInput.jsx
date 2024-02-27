export default function ProfileFormInput({ name, required = false }) {
  const result = name.replace(/\s/g, "");
  return (
    <>
      <label htmlFor={result}>{`${required ? name + "*" : name}`}</label>
      <input name={result} />
    </>
  );
}
