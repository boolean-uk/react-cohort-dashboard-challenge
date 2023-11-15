export default function FormField({description, name, value, type, handleChange}) {
  return (
    <label>{description}
      <input
        name={name}
        defaultValue={value}
        type={type}
        onChange={(event) => handleChange(event)}
      />
    </label>
  )
}