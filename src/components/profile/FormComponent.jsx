
export default function FormComponent({name, value, onChange}) {
  return (
    <label> {name}
        <input
            // onChange={handleInputChange}
            type="text"
            name={name}
            value={value}
            placeholder={value}
        />
    </label>
  )
}
