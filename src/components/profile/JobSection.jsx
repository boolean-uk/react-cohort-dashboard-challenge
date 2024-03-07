import ProfileInputField from "./subcomponents/ProfileInputField"
export default function JobSection() {
    return (
        <div className="sectionContainer" style={{ gridArea: "job" }}>
            <p className="sectionTitle">Job info</p>
            <ProfileInputField fieldName="Job Title" field="jobTitle" />
        </div>
    )
}