import ProfileInputField from "./subcomponents/ProfileInputField"
export default function ContactSection() {
    return (
        <div className="sectionContainer" style={{ gridArea: "contact" }}>
            <p className="sectionTitle">Contact</p>
            <ProfileInputField fieldName="Email" field="email" required={true} />
        </div>
    )
}