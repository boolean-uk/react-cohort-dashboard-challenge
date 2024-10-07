import { useContext } from "react"
import { FormContext } from "../UserInfoForm"

function WorkInfo() {
    const { formData, handleChange } = useContext(FormContext)

    return (
        <section className="userInfoSection">
            <h2>
                Work info
            </h2>
            <form className="userInfoForm">
                <label>Job title<br/>
                    <input
                    type="text"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    required/>
                </label> <br/>
            </form>
        </section>
    )
}

export default WorkInfo