export default function TextInput(props) {
    return (
        <>
        <label>{props.label}</label>
        <input value={props.value} type="text"></input>
        </>
    )
}