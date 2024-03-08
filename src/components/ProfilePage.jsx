import { useParams } from "react-router-dom";
import { useContext } from 'react'
import FormSection from "./FormSection";

import { ContactContext } from "../App";
import ProfileIcon from "./ProfileIcon";

function ProfilePage() {
    const { id } = useParams()
    const { contacts } = useContext(ContactContext)

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
        { id: 'username', label: 'Username*', placeholder: name },
        { id: 'email', label: 'Email*', placeholder: matchingContact.email },
    ];

    const addressFields = [
        { id: 'street', label: 'Street', placeholder: matchingContact.street },
        { id: 'suite', label: 'Suite', placeholder: '45' },
        { id: 'city', label: 'City', placeholder: matchingContact.city },
        { id: 'zipcode', label: 'Zipcode', placeholder: '11010' },
    ];

    const contactInfoFields = [
        { id: 'phone', label: 'Phone*', placeholder: '80040023' },
        { id: 'website', label: 'Website', placeholder: 'www.github.com' },
    ];

    const companyInfoFields = [
        { id: 'company-name', label: 'Name', placeholder: 'Company' },
        { id: 'catch-phrase', label: 'Catch Phrase', placeholder: 'Company catch phrase' },
        { id: 'business-statement', label: 'Business Statement', placeholder: 'Company statement' },
    ];


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
                    <FormSection title="Account info" fields={accountInfoFields} />
                    <FormSection title="Address" fields={addressFields} />
                    <FormSection title="Contact info" fields={contactInfoFields} />
                    <FormSection title="Company info" fields={companyInfoFields} />
                    <p>*Required</p>
                </div>

                <button className="save-button">Save</button>
            </div>
        </div>
    )
}

export default ProfilePage