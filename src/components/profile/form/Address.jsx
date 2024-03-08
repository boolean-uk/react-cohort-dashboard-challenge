import { useContext } from "react";
import { ProfileContextAPIContext } from "../../../contextAPI/ProfileContextAPI";
import '../../../style/profile/form/form.css'


const Address = () => {

    const {form, setForm} = useContext(ProfileContextAPIContext)

    const handleChange = (e) => {
        const {name, value} = e.target;

        setForm({ ...form, 
            [name]: value })
    }

    return(
     <div className="profile-form-content-item">
          <h2>Address</h2>
        <input
            name="street"
            type="text"
            placeholder="Street"
            className="profileFormItem"
            value={form.street}
            onChange={(e) => {handleChange(e) } } />

        <input
            name="suite"
            type="text"
            placeholder="Suite"
            className="profileFormItem"
            value={form.suite}
            onChange={(e) => {handleChange(e) } } />
        
        <input
            name="city"
            type="text"
            placeholder="City"
            className="profileFormItem"
            value={form.city}
            onChange={(e) => {handleChange(e) } } />
        <input
            name="zipcode"
            type="zipcode"
            placeholder="Zipcode"
            className="profileFormItem"
            value={form.email}
            onChange={(e) => {handleChange(e) } } />
        
     </div>
    )
}

export default Address;