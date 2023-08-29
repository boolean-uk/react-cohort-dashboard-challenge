import "../../styles/main.css"
import UserIcon from "../../components/UserIcon"
import { useContext, useState } from "react"
import DataContext from "../../DataContext"
import { useNavigate, useParams } from "react-router-dom"
import FormInput from "../../components/FormInput"

export default function Profile() {
    const {users, setUsers, tabs} = useContext(DataContext)
    const {id} = useParams()
    const navigate = useNavigate()
    const user = users[Number(id)-1]
    const [firstName, lastName] = user.name.split(' ')
    const [thisUser, setThisUser] = useState({
        name: user.name,
        firstName: firstName,
        lastName: lastName,
        username: user.username,
        email: user.email,
        street: user.address.street,
        suite: user.address.suite,
        city: user.address.city,
        zipcode: user.address.zipcode,
        phone: user.phone,
        website: user.website,
        companyName: user.company.name,
        catchPhrase: user.company.catchPhrase,
        bs: user.company.bs
    })

    const handleSubmit = (event) => {
        event.preventDefault()
        const user = users[Number(id)-1]
        user.name = thisUser.firstName + " " + thisUser.lastName
        user.username = thisUser.username
        user.email = thisUser.email
        user.address.street = thisUser.street
        user.address.suite = thisUser.suite
        user.address.city = thisUser.city
        user.address.zipcode = thisUser.zipcode
        user.phone = thisUser.phone
        user.website = thisUser.website
        user.company.name = thisUser.companyName
        user.company.catchPhrase = thisUser.catchPhrase
        user.company.bs = thisUser.bs
        setUsers([...users])
        tabs.map(t => {
            if (t.label === 'Home'){
                t.active = true
            } else {
                t.active = false
            }
        })
        navigate('/')
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
                        <FormInput title={"First Name*"} thisName={"firstName"} user={thisUser} set={setThisUser} req={true}/>
                        <FormInput title={"Last Name*"} thisName={"lastName"} user={thisUser} set={setThisUser} req={true}/>
                        <FormInput title={"Username*"} thisName={"username"} user={thisUser} set={setThisUser} req={true}/>
                        <FormInput title={"Email*"} thisName={"email"} user={thisUser} set={setThisUser} req={true}/>
                    </div>
                    <div className="address-info">
                        <h1 className="segment-title">Address</h1>
                        <FormInput title={"Street"} thisName={"street"} user={thisUser} set={setThisUser} req={false}/>
                        <FormInput title={"Suite"} thisName={"suite"} user={thisUser} set={setThisUser} req={false}/>
                        <FormInput title={"City"} thisName={"city"} user={thisUser} set={setThisUser} req={false}/>
                        <FormInput title={"Zipcode"} thisName={"zipcode"} user={thisUser} set={setThisUser} req={false}/>
                    </div>
                    <div className="contact-info">
                        <h1 className="segment-title">Contact Info</h1>
                        <FormInput title={"Phone*"} thisName={"phone"} user={thisUser} set={setThisUser} req={true}/>
                        <FormInput title={"Website"} thisName={"website"} user={thisUser} set={setThisUser} req={false}/>
                    </div>
                    <div className="company-info">
                        <h1 className="segment-title">Company Info</h1>
                        <FormInput title={"Name"} thisName={"companyName"} user={thisUser} set={setThisUser}/>
                        <FormInput title={"Catch Phrase"} thisName={"catchPhrase"} user={thisUser} set={setThisUser} req={false}/>
                        <FormInput title={"Business Statement"} thisName={"bs"} user={thisUser} set={setThisUser} req={false}/>
                    </div>
                    <div className="profile-action">
                        <button className="save-info-button" type='submit'>Save</button>
                    </div>
                </form>
            </div>
        </div>
    )
}