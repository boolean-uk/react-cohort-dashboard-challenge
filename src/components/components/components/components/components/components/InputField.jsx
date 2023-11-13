export default function InputField({inputField}) {
    return(
        <>
            <label>{inputField.name}
                <input required={inputField.required}/>
            </label>
        </>
    )
}