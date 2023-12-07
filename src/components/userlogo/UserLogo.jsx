import React, { useEffect, useState } from "react";

function UserLogo() {
  const [userName, setUserName] = useState(null);
  const URL = "http://localhost:8000";

  useEffect(() => {
    const fetchUserData = async (userId) => {
      try {
        const response = await fetch(`${URL}/posts/${userId}`);

        if (!response.ok) {
          console.error("Error fetching user data:", response.status);
          // Set userName to null or an empty object based on your requirements
          setUserName(null);
          return;
        }

        const data = await response.json();
        setUserName(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
        // Set userName to null or an empty object based on your requirements
        setUserName(null);
      }
    };

    // Replace 1 with the actual user ID
    fetchUserData(1);
  }, [URL]);

  const getInitials = () => {
    if (!userName || !userName.firstName || !userName.lastName) return "...";
    return (
      userName.firstName.charAt(0).toUpperCase() +
      userName.lastName.charAt(0).toUpperCase()
    );
  };

  return <div className="profile__icon">{getInitials()}</div>;
}

export default UserLogo;
