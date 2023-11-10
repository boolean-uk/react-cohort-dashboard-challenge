export default function FormField({description, name, value, type}) {
  return (
    <label>{description}
      <input 
        name={name}
        value={value}
        type={type}
      />
    </label>
  )
}