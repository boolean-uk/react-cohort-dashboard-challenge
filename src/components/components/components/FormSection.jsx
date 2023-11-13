import InputField from "./components/components/components/InputField"

export default function FormSection({section, form, setForm}) {
    return(
        <>
        {console.log(section.inputFields)}
            <section className="form-section">
                <h3>{section.title}</h3>
                {section.inputFields.map( (inputField, index) => (
                    <InputField key={index} inputField={inputField} form={form} setForm={setForm}/>
                ))} 
            </section>
        </>
    )
}
