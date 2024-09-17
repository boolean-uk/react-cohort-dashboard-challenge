import "../../styles/PostInput.css";

export default function ProfileFormInput({
  name,
  value,
  onChange,
  required = false,
}) {
  let result = name.replace(/\s/g, "");
  result = result[0].toLowerCase() + result.slice(1);

  if (name.toLowerCase() === "profile image") { //If I want to display the profileImage
    return (
      <div>
        <label className="cm-input-label" htmlFor={result}>
          {required ? name + "*" : name}
        </label>
        <img src={value} alt="Profile Image" style={{ maxWidth: "100px" }} /> 
      </div>
      
    );
  }

  return (
    <>
      <label className="cm-input-label" htmlFor={result}>{`${
        required ? name + "*" : name
      }`}</label>
      <input
        className="cm-input"
        name={result}
        value={value}
        onChange={(e) => onChange(e)}
      />
    </>
  );
}