import { Link } from "react-router-dom";

const Icon = ({ contact }) => {  
    
    if (contact === null || contact === undefined) {
        return "...Loading"
    }
    const firstName = contact.firstName;
    const lastName = contact.lastName;
    const favouriteColor = contact.favouriteColour;
    const id = contact.id;

    const initials = `${firstName.charAt(0)}${lastName.charAt(0)}`;

    const avatarStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: favouriteColor,
        color: '#fff',
        borderRadius: '100%',
        width: '50px',  
        height: '50px',
        fontSize: '20px', 
        fontWeight: 'bold',
      };

    return (
        <div>
            <Link to={`/profile/${id}`}>
                <div style={avatarStyle}>
                    {initials}
                </div>
            </Link>
        </div>
    )
}

export default Icon;

