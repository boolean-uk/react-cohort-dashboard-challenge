import ProfileInputField from "./subcomponents/ProfileInputField"
import "../../styles/profile/ProfileSection.css"
export default function AccountSection() {
    return (
        <div className="sectionContainer" style={{gridArea: "account"}}>
            <p className="sectionTitle">Account info</p>
            <ProfileInputField fieldName="First Name" required={true} field="firstName" />
            <ProfileInputField fieldName="Last Name" required={true} field="lastName" />
            <ProfileInputField fieldName="Email" required={true} field="email" />
            <ProfileInputField fieldName="Gender" required={true} field="gender" />
        </div>
    )
}