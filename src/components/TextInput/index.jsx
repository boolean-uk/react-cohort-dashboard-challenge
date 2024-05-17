import './textInput.css'

export default function TextInput(props) {
    return (
        <div className="textInput">
        <label>{props.label}</label>
        <input value={props.value} name={props.name} placeholder={props.placeholder} type="text"></input>
        </div>
    )
}