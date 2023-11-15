

const InputField = ({ label, type, name, value, onChange }) => {
  return (
    <label>
      {label}:
      <input type={type} name={name} value={value} onChange={onChange} required />
    </label>
  );
};

export default InputField;
