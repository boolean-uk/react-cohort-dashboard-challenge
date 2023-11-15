import React, { useEffect, useState } from "react";

export default function UserPicture() {
  const [userPerson, setUserPerson] = useState(null);
  const URL = "https://boolean-api-server.fly.dev/Hayor4real";

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`${URL}/contact/1`);
        const data = await response.json();
        setUserPerson(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [URL]);

  const getInitials = () => {
    if (!userPerson) return "...";
    return userPerson.firstName.charAt(0) + userPerson.lastName.charAt(0);
  };

  return <div className="profile__icon">{getInitials()}</div>;
}
