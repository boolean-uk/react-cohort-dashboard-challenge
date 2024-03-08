import PropTypes from "prop-types";
import Avatar from "react-avatar";
import { useLocation } from "react-router-dom";

function ProfilePage() {
  const { state } = useLocation();
  return (
    <div className="profile-page">
      <div className="profile-details-container">
        <Avatar
          name={`${state.user.firstName} ${state.user.lastName}`}
          round={true}
        />
        <h2>
          {state.user.firstName} {state.user.lastName}
        </h2>
        <div className="line-container">
          <hr className="line"></hr>
        </div>
        {Object.entries(state.user).map(([name, value]) =>
          name !== "id" &&
          name !== "favouriteColour" &&
          name !== "profileImage" ? (
            <p key={name}>
              <b>{name}:</b> {value}
            </p>
          ) : null
        )}
      </div>
    </div>
  );
}

ProfilePage.propTypes = {
  user: PropTypes.object,
};

export default ProfilePage;
