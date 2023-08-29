import "../../styles/main.css"
import UserIcon from "../../components/UserIcon"
import { useContext } from "react"
import DataContext from "../../DataContext"
import { useParams } from "react-router-dom"
import FormInput from "../../components/FormInput"

export default function Profile() {
    const {users} = useContext(DataContext)
    const {id} = useParams()
    const user = users[Number(id)-1]
    const [firstName, lastName] = user.name.split(' ')

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('Submitted!')
    }

    return (
        <div className="main">
            <h1 className="profile-header">Profile</h1>
            <div className="profile-info">
                <div className="profile-name">
                    <div className="profile-name-avatar">
                        <UserIcon user={user}/>
                    </div>
                    <h1 className="profile-name-tag">{user.name}</h1>
                    <p className="profile-form-note">*Required</p>
                </div>
                <form className="profile-data-form" onSubmit={handleSubmit}>
                    <div className="account-info">
                        <h1 className="segment-title">Account Info</h1>
                        <FormInput title={"First Name*"} value={firstName}/>
                        <FormInput title={"Last Name*"} value={lastName}/>
                        <FormInput title={"Username*"} value={user.username}/>
                        <FormInput title={"Email*"} value={user.email}/>
                    </div>
                    <div className="address-info">
                        <h1 className="segment-title">Address</h1>
                        <FormInput title={"Street"} value={user.address.street}/>
                        <FormInput title={"Suite"} value={user.address.suite}/>
                        <FormInput title={"City"} value={user.address.city}/>
                        <FormInput title={"Zipcode"} value={user.address.zipcode}/>
                    </div>
                    <div className="contact-info">
                        <h1 className="segment-title">Contact Info</h1>
                        <FormInput title={"Phone*"} value={user.phone}/>
                        <FormInput title={"Website"} value={user.website}/>
                    </div>
                    <div className="company-info">
                        <h1 className="segment-title">Company Info</h1>
                        <FormInput title={"Name"} value={user.company.name}/>
                        <FormInput title={"Catch Phrase"} value={user.company.catchPhrase}/>
                        <FormInput title={"Business Statement"} value={user.company.bs}/>
                    </div>
                    <div className="profile-action">
                        <button className="save-info-button" type='submit'>Save</button>
                    </div>
                </form>
            </div>
        </div>
    )
}