import { useContext } from "react";
import { ProfileContextAPIContext } from "../../../contextAPI/ProfileContextAPI";
import '../../../style/profile/form/form.css'
const AccountInfo = () => {

    const {form, setForm} = useContext(ProfileContextAPIContext)

    const handleChange = (e) => {
        const {name, value} = e.target;

        setForm({ ...form, 
            [name]: value })
    }


    return(
        
     <div className="profile-form-content-item">
        <h2>Account Info</h2>
        <input
            name="firstName"
            required
            type="text"
            placeholder="FirstName"
            className="profileFormItem"
            value={form.firstName}
            onChange={(e) => {handleChange(e) } } />

        <input
            name="lastName"
            type="text"
            required
            placeholder="LastName"
            className="profileFormItem"
            value={form.lastName}
            onChange={(e) => {handleChange(e) } } />
        
        <input
            name="userName"
            type="text"
            required
            placeholder="Username"
            className="profileFormItem"
            value={form.userName}
            onChange={(e) => {handleChange(e) } } />
        <input
            name="email"
            type="email"
            required
            placeholder="Email"
            className="profileFormItem"
            value={form.email}
            onChange={(e) => {handleChange(e) } } />
        
     </div>
    )
}

export default AccountInfo;