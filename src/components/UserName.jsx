import "/src/styles/UserName.css"

import { Link } from "react-router-dom"
import PropTypes from 'prop-types';

export const UserName = ({user}) => {
    if (!user) {
      return (
        <div className="user-name">
          <p>Loading user...</p>
        </div>
      );
    }
    return (
      <Link to={`/profile/${user.id}`} className="user-name">
        <p>
          {user.firstName} {user.lastName}
        </p>
      </Link>
    );
}

UserName.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
    })
};