import InputField from "./InputField"

export default function FormSection({section, form, setForm}) {
    return(
        <>
            <section className="form-section">
                <h3>{section.title}</h3>
                {section.inputFields.map( (inputField, index) => (
                    <InputField key={index} inputField={inputField} form={form} setForm={setForm}/>
                ))} 
            </section>
        </>
    )
}
