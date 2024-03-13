import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Icon({ user }) {
  const style = {
    backgroundColor: user.favouriteColour,
  };

  return (
    <Link to={`/profile/${user.id}`} className="profile-link">
      <div className="profile-icon-contact">
        <div id="profile-icon-id-contact" style={style}>
          {user.firstName.charAt(0) + "" + user.lastName.charAt(0)}
        </div>
      </div>
    </Link>
  );
}

Icon.propTypes = {
  user: PropTypes.object,
};

export default Icon;
