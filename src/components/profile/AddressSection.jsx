import ProfileInputField from "./subcomponents/ProfileInputField"
export default function AddressSection() {
    return (
        <div className="sectionContainer" style={{ gridArea: "address" }}>
            <p className="sectionTitle">Address</p>
            <ProfileInputField fieldName="Street" field="street" />
            <ProfileInputField fieldName="City" field="city" />
            <ProfileInputField fieldName="Latitude" field="latitude" />
            <ProfileInputField fieldName="Longitude" field="longitude" />
        </div>
    )
}