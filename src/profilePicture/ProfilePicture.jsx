import React from "react";

const ProfilePicture = ({ firstName, lastName, favouriteColour }) => {
  // Function to generate initials from the first and last name
  const generateInitials = () => {
    const firstInitial = firstName ? firstName[0] : "";
    const lastInitial = lastName ? lastName[0] : "";
    return `${firstInitial}${lastInitial}`.toUpperCase();
  };

  const circleStyle = {
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    backgroundColor: favouriteColour || "#CCCCCC",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#000046",
    fontSize: "20px",
    fontWeight: "bold",
  };

  return <div style={circleStyle}>{generateInitials()}</div>;
};

export default ProfilePicture;
