import InputBox from "../../InputBox";
import "../../../styles/profile/ProfileInputField.css";
import { useContext } from "react";
import { ProfileContext } from "../../../pages/Profile";
export default function ProfileInputField({ fieldName, required = false, placeholder, field }) {
    const {user, setUser} = useContext(ProfileContext)
    const handleChange = (e) => {
        e.preventDefault()
        setUser({...user, [field]: e.target.value})
    }
    return (
        <div className="profileInputFieldContainer">
            <p className="fieldTitle">{fieldName}{required ? "*" : ""}</p>
            {
                user[field] !== undefined ?
                <input className="inputBox" type="text" value={user[field]} placeholder={placeholder} onChange={(e) => handleChange(e)} />
                :
                <p>Loading...</p>
            }
        </div>
    )
}