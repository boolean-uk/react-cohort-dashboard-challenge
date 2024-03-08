import { useContext } from "react";
import { ProfileContextAPIContext } from "../../../contextAPI/ProfileContextAPI";
import '../../../style/profile/form/form.css'


const ContactInfo = () => {

    const {form, setForm} = useContext(ProfileContextAPIContext)

    const handleChange = (e) => {
        const {name, value} = e.target;

        setForm({ ...form, 
            [name]: value })
    }

    console.log(form)
    return(
     <div className="profile-form-content-item">
        <h2>Contact Info</h2>
        <input
            name="phone"
            type="phone"
            required
            placeholder="Phone"
            className="profileFormItem"
            value={form.phone}
            onChange={(e) => {handleChange(e) } } />

        <input
            name="website"
            type="text"

            placeholder="Website"
            className="profileFormItem"
            value={form.website}
            onChange={(e) => {handleChange(e) } } />
        
     </div>
    )
}

export default ContactInfo;