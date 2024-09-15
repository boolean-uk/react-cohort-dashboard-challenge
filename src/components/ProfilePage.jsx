import { useParams } from "react-router-dom";
import { useContext, useState } from 'react'
import ProfileForm from "./ProfileForm";

import { ContactContext } from "../App";
import ProfileIcon from "./ProfileIcon";

function ProfilePage() {
    const { id } = useParams()
    const { contacts } = useContext(ContactContext)
    const [inputValues, setInputValues] = useState({})

    //vänta på att data 'contacts' har hämtats från api
    if (!contacts || contacts.length === 0) {
        return null;
    }

    //hitta contact
    const matchingContact = contacts.find(contact => Number(contact.id) === Number(id));
    const name = matchingContact.firstName + ' ' + matchingContact.lastName
    const initials = matchingContact.firstName.charAt(0) + matchingContact.lastName.charAt(0);

    const accountInfoFields = [
        { id: 'firstName', label: 'First name*', placeholder: matchingContact.firstName },
        { id: 'lastName', label: 'Last name*', placeholder: matchingContact.lastName },
        { id: 'gender', label: 'Gender', placeholder: matchingContact.gender },
        { id: 'email', label: 'Email*', placeholder: matchingContact.email },
        { id: 'jobTitle', label: 'Job title', placeholder: matchingContact.jobTitle },
    ];

    const addressFields = [
        { id: 'street', label: 'Street', placeholder: matchingContact.street },
        { id: 'city', label: 'City', placeholder: matchingContact.city },
        { id: 'latitude', label: 'Latitude', placeholder: matchingContact.latitude },
        { id: 'longitude', label: 'Longitude', placeholder: matchingContact.longitude },
    ];

    const favouriteFields = [
        { id: 'favouriteColour', label: 'RGB colour', placeholder: matchingContact.favouriteColour },
    ];

    const imageFields = [
        { id: 'profileImage', label: 'Profile image', placeholder: matchingContact.profileImage },
    ];

    //Update a contact by id
    const updateProfile = (e) => {
        e.preventDefault()

        //Skicka PUT request till api att uppdatera profil
        fetch(`https://boolean-api-server.fly.dev/alexandra7667/contact/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(inputValues)
        })
    }


    return (
        <div className="main">
            <h2 className="profile-title">Profile</h2>
            <div className="profile-page">
                <div className='pic-and-name'>
                    <ProfileIcon
                        initials={initials}
                        matchingContact={matchingContact} />

                    <h2>{name}</h2>
                </div>
                <hr />

                <div className="profile-four-areas">
                    <ProfileForm title="Account info" fields={accountInfoFields} inputValues={inputValues} setInputValues={setInputValues} />
                    <ProfileForm title="Address" fields={addressFields} inputValues={inputValues} setInputValues={setInputValues} />
                    <ProfileForm title="Favourite info" fields={favouriteFields} inputValues={inputValues} setInputValues={setInputValues} />
                    <ProfileForm title="Image info" fields={imageFields} inputValues={inputValues} setInputValues={setInputValues} />
                    <p>*Required</p>
                </div>

                <button
                    className="save-button"
                    onClick={updateProfile}>
                    Save
                </button>
            </div>
        </div>
    )
}

export default ProfilePage