import { useContext } from "react"
import { FormContext } from "../UserInfoForm"

function AccountInfo() {
    const { formData, handleChange } = useContext(FormContext)

    return (
        <section className="userInfoSection">
            <h2>
                Account info
            </h2>
            <form className="userInfoForm">
                <label>First Name <br/>
                    <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required/>
                </label> <br/>
                <label>Last Name <br/>
                    <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required/>
                </label> <br/>
                <label>Gender<br/>
                    <input
                    type="text"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required/>
                </label> <br/>
                <label>Email <br/>
                    <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required/>
                </label> <br/>
            </form>
        </section>
    )
}

export default AccountInfo