import { useState, useEffect } from "react";


export default function ProfileIcon() {
  const [user ,setUser] = useState(null)
  

  const fetchUser = () => {
    fetch(`https://boolean-api-server.fly.dev/PCapid3v/contact/1`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  };

  useEffect(fetchUser, []);

    return <div className="profile-icon"> {!user ? "..." : user.firstName.charAt(0) + user.lastName.charAt(0)}</div>;
  }