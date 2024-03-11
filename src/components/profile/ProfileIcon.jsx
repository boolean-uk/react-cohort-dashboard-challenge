import PropTypes from 'prop-types';
import '../../styles/ProfileCircle.css' // Import CSS file for styling

ProfileIcon.propTypes = {
    user: PropTypes.object
  };


export default function ProfileIcon({user}) {

    // To ensure that the oobject have been loaded.
    if (!user || !user.firstName || !user.lastName) {
        return ( 
            <div>
                Loading...
            </div>
        )
    }
    const initials = `${user.firstName.charAt(0)}${user.lastName.charAt(0)}`.toUpperCase();
    // const initials = "k k"
    const color = user.favouriteColour
    const style = {
        backgroundColor: color
    };

   
  
  return (
    <div 
        className="circle"
        style={style} // Apply background color dynamically
        // onClick={() => navigate(`/profile/${contactId}`)}
    >
        <p>{initials}</p>
    </div>
  )
}
