import PropTypes from "prop-types";
import "../../style/icons/UserIcon.css";

const UserIcon = ({ firstName, lastName }) => {
    const content =
        firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase();

    return <div className="user-icon">{content}</div>;
};

export default UserIcon;

UserIcon.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
};
