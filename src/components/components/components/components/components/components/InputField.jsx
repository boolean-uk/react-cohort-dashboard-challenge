export default function InputField({inputField, form, setForm}) {
   
  const handleChange = (e) => { 
    setForm({...form, [e.target.name]: e.target.value})
  }
    return(
        <>
            <label>{inputField.label}
                <input name={inputField.name} onChange={e => handleChange(e)} required={inputField.required} value={form[inputField.name]}/>
            </label>
        </>
    )
}