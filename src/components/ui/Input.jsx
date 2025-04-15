function Input({ placeholder, value, type = "text", onChange }) {
  return (
    <input
      className="cohort-input"
      placeholder={placeholder}
      value={value}
      type={type}
      onChange={onChange}
    />
  );
}

export default Input;
