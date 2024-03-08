import titleHeader from '../assets/title-header.svg'
import { useNavigate } from "react-router-dom";
import { useContext } from 'react'

import { ContactContext } from "../App";
import ProfileIcon from "./ProfileIcon";

function Header() {
    const navigate = useNavigate();
    const { contacts } = useContext(ContactContext)

    //vänta på att data 'contacts' har hämtats från api
    if (!contacts || contacts.length === 0) {
        return null;
    }

    //hitta contact
    const matchingContact = contacts.find(contact => Number(contact.id) === Number(1));
    const initials = matchingContact.firstName.charAt(0) + matchingContact.lastName.charAt(0);

    const goToMain = () => {
        //navigera till dashboard
        navigate('/');
    }

    const goToProfilePage = () => {
        console.log("navigating to profile")
        navigate('/profile/1')
    }

    return (
        <header className="header">
            <img
                className='header-title'
                src={titleHeader}
                alt="title header"
                onClick={goToMain} />
            <ProfileIcon
                className='top-right-icon'
                initials={initials}
                matchingContact={matchingContact} 
                onClick={goToProfilePage}/>
        </header>
    )
}

export default Header