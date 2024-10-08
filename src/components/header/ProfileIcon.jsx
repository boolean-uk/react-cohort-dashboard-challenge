import { useContext } from "react";
import { ContactContext } from "../../App";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


export function ProfileIcon({contactId}) {
    const { contacts } = useContext(ContactContext);
    
   const currentContact = contacts.find((c) => c.id === contactId);

    const getInitials = (firstName, lastName) => {
        const firstInitial = firstName[0].toUpperCase();
        const lastInitial = lastName[0].toUpperCase();
        return `${firstInitial}${lastInitial}`;
    };

   

    if (!currentContact) {
    return "Loading...";
    }

    const initials = getInitials(currentContact.firstName, currentContact.lastName);

    return(


    <div className="ms-auto m-0 p-0">
        <Link to={`/account/${currentContact.id}`} className="profile-link">
                <div
                className=" rounded-circle d-flex justify-content-center align-items-center profile-initials-circle" 
                style={{ background: currentContact.favouriteColour, color: '#000046' }}
                >
                <span>{initials}</span>
                </div>
            </Link>
    </div>
        
    )
}

ProfileIcon.propTypes = {
    contactId: PropTypes.number.isRequired,
  };