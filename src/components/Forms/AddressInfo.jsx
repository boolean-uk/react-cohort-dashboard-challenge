import { useContext } from "react"
import { FormContext } from "../UserInfoForm"


function AddressInfo() {
    const { formData, handleChange } = useContext(FormContext)

    return (
        <section className="userInfoSection">
            <h2>
                Address
            </h2>
            <form className="userInfoForm">
                <label>Street <br/>
                    <input
                    type="text"
                    name="street"
                    value={formData.street}
                    onChange={handleChange}
                    required/>
                </label> <br/>
                <label>City <br/>
                    <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required/>
                </label> <br/>
            </form>
        </section>
    )
}

export default AddressInfo