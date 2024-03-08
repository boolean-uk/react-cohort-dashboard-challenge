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
            name="companyName"
            type="text"
            placeholder="Company Name"
            className="profileFormItem"
            value={form.companyName}
            onChange={(e) => {handleChange(e) } } />

        <input
            name="catchPhrase"
            type="text"
            placeholder="Catch Phrase"
            className="profileFormItem"
            value={form.catchPhrase}
            onChange={(e) => {handleChange(e) } } />
        
        <input
            name="businessStatement"
            type="text"
            placeholder="Business Statement"
            className="profileFormItem"
            value={form.businessStatement}
            onChange={(e) => {handleChange(e) } } />

        
     </div>
    )
}

export default CompanyInfo;