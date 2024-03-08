import React, { useContext } from "react";
import { UserContext } from "../App";

function Profile() {
  const { users } = useContext(UserContext);

 
  if (!users || !users.firstName || !users.lastName) {
    return null; 
}

  return (
    <div
      style={{
        background: `${users.favouriteColour}`,
        borderRadius: "50%",
        width: "50px",
        height: "50px",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
      }}
    >
      <p>
        {users.firstName.charAt(0)} {users.lastName.charAt(0)}
      </p>
    </div>
  );
}

export default Profile;
