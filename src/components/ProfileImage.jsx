import PropTypes from 'prop-types';
import './styling/profileImage.css';

function ProfileImage({ user: { firstName, lastName, favouriteColour } }) {
  ProfileImage.propTypes = {
    user: PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      favouriteColour: PropTypes.string.isRequired,
    }),
  };

  const initials = `${firstName[0]}${lastName[0]}`;

  return (
    <div
      className="profile-image"
      style={{ backgroundColor: favouriteColour }}
      title={`${firstName} ${lastName}`}
    >
      <span>{initials}</span>
    </div>
  );
}

export default ProfileImage;