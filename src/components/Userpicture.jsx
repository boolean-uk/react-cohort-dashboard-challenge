import  { useEffect, useState } from "react";

export default function UserProfilePic() {
  const [userProfile, setUserProfile] = useState(null);
  const URL = "https://boolean-api-server.fly.dev/Elizabethcodes44";

  useEffect(() => {
    const fetchUserProfile = async () => {
      const response = await fetch(`${URL}/contact/1`);
      const data = await response.json();
      setUserProfile(data);
    };

    fetchUserProfile();
  }, [URL]);

  const getInitials = () => {
    if (!userProfile) return "...";
    return userProfile.firstName.charAt(0) + userProfile.lastName.charAt(0);
  };

  return <div className="initials">{getInitials()}</div>;
}