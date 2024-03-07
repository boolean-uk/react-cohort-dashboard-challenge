import { getInitials } from "../utils/getInitials";
import PropTypes from "prop-types";

function UserCircle(props) {
  const { userFirstName, userLastName, userfavouriteColour } = props;
  return (
    <div
      className="initials-circle"
      style={{ backgroundColor: `${userfavouriteColour}` }}
    >
      {getInitials(`${userFirstName} ${userLastName}`)}
    </div>
  );
}

UserCircle.propTypes = {
  userFirstName: PropTypes.string,
  userLastName: PropTypes.string,
  userfavouriteColour: PropTypes.string,
};

export default UserCircle;
