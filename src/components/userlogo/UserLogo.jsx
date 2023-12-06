
import React, { useEffect, useState } from "react";

function UserLogo() {
  const [userName, setUserName] = useState(null);
  const URL = "http://localhost:8000";

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`${URL}/posts/1`);
        
        if (!response.ok) {
          console.error("Error fetching user data:", response.status);
          return;
        }

        const data = await response.json();
        setUserName(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
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
