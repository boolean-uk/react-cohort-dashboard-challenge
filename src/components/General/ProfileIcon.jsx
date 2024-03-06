import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

export const ProfileIcon = ({ user }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/id")}
      className="profile-icon"
      style={{ backgroundColor: `${user.favouriteColour}` }}
    >
      {`${user.firstName[0]}${user.lastName[0]}`}
    </button>
  );
};

ProfileIcon.propTypes = {
  user: PropTypes.object,
};
