import PropTypes from "prop-types";
import Avatar from "react-avatar";
import { useLocation } from "react-router-dom";

function ProfilePage() {
  const { state } = useLocation();
  return (
    <div className="profile-page">
      <Avatar
        name={`${state.user.firstName} ${state.user.lastName}`}
        round={true}
      />
      <h2>
        {state.user.firstName} {state.user.lastName}
      </h2>

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
  );
}

ProfilePage.propTypes = {
  user: PropTypes.object,
};

export default ProfilePage;
