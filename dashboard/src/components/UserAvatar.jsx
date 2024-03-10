import React from "react";

function UserAvatar({ firstName, lastName, color }) {
  // Function to extract initials from the name
  const getInitials = firstName[0] + lastName[0];

  return (
    <div
      className="authorCircle"
      style={{
        width: "65px",
        height: "65px",
        borderRadius: "50%",
        backgroundColor: color,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: "20px", // Adjust as needed
        marginTop: "20px",
      }}
    >
      <span style={{ color: "black", fontWeight: "bold", fontSize: "24px" }}>
        {getInitials}
      </span>
    </div>
  );
}

export default UserAvatar;
