import { TextField } from "@mui/material"
import './style.scss'

export default function InputField({label, id, name, placeholder, type, onChange, readOnly}) {

    return(
        <div className="textFieldParent">
            <input className="inputField" id={id} placeholder={placeholder} name={name} type={type} onChange={onChange} label={label} readOnly={readOnly}/>
        </div>
    )
}