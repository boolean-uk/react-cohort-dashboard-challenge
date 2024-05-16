import FormSection from "../FormSection"
import TextInput from "../TextInput"

export default function ProfileForm(props) {
    return (
        <form>
            profile form 
            {props.contact.firstName}, {props.contact.lastName}
            <FormSection title="Account Info:">
                <TextInput value={props.contact.firstName} label="First Name:"></TextInput>
                <TextInput value={props.contact.lastName} label="Last Name:"></TextInput>
                <TextInput value={props.contact.firstName+'01'} label="Username:"></TextInput>
                <TextInput value={props.contact.email} label="Email:"></TextInput>ß
                </FormSection>
                <FormSection title="Account Info:">
                <TextInput value={props.contact.firstName} label="First Name:"></TextInput>
                <TextInput value={props.contact.lastName} label="Last Name:"></TextInput>
                <TextInput value={props.contact.firstName+'01'} label="Username:"></TextInput>
                <TextInput value={props.contact.email} label="Email:"></TextInput>ß
                </FormSection>
        </form>
    )
}