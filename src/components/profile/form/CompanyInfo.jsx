import { useContext } from "react";
import { ProfileContextAPIContext } from "../../../contextAPI/ProfileContextAPI";
import '../../../style/profile/form/form.css'


const CompanyInfo = () => {

    const {form, setForm} = useContext(ProfileContextAPIContext)

    const handleChange = (e) => {
        const {name, value} = e.target;

        setForm({ ...form, 
            [name]: value })
    }


    return(
     <div className="profile-form-content-item">
          <h2>Company Info</h2>
        <input
            name="userName"
            type="text"
            placeholder="UserName"
            className="profileFormItem"
            value={form.userName}
            onChange={(e) => {handleChange(e) } } />

        <input
            name="catchPhrase"
            type="text"
            placeholder="CatchPhrase"
            className="profileFormItem"
            value={form.catchPhrase}
            onChange={(e) => {handleChange(e) } } />
        
        <input
            name="businessStatement"
            type="text"
            placeholder="BusinessStatement"
            className="profileFormItem"
            value={form.businessStatement}
            onChange={(e) => {handleChange(e) } } />

        
     </div>
    )
}

export default CompanyInfo;