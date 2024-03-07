import PropTypes from "prop-types";
import "../../style/icons/UserIcon.css";

const UserIcon = ({ color, firstName, lastName, onClick }) => {
    const content =
        firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase();

    return (
        <div
            onClick={onClick}
            className="user-icon"
            style={{ backgroundColor: color }}
        >
            {content}
        </div>
    );
};

export default UserIcon;

UserIcon.propTypes = {
    color: PropTypes.string,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};
