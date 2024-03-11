import React from "react";
import ProfilePicture from "./ProfilePicture";
import ProfileForm from "./ProfileForm";
import { UserContext } from "../../App";
import { useContext } from "react";

function Profile() {
  const {user} = useContext(UserContext)

  return (
    <>
      <div className="profile-container">
        <h1>Profile</h1>
        <div className="profile-header">
          <ProfilePicture firstName={user.firstName} lastName={user.lastName} favouriteColour={'green'} />
          <h1>{user.firstName} {user.lastName}</h1>
        </div>
        <ProfileForm />
      </div>
    </>
  );
}

export default Profile;
