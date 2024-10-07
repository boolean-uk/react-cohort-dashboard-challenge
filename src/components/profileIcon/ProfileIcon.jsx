import { Link } from "react-router-dom";
import "./style.scss";
import PropTypes from "prop-types";

export default function ProfileIcon({ letters, setFavouriteColour, id }) {
  return (
    <Link to={`/profile/${id}`} className="profileLink">
      <div className="userLogo" style={{ backgroundColor: setFavouriteColour }}>
        <p>{letters}</p>
      </div>
    </Link>
  );
}

ProfileIcon.propTypes = {
  letters: PropTypes.string,
  setFavouriteColour: PropTypes.string,
  id: PropTypes.number,
};
