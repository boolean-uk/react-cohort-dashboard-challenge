import { useEffect, useState } from "react";

export default function UserProfileIcon() {
  const [user, setUser] = useState(null);

  const fetchUser = () => {
    fetch("https://boolean-api-server.fly.dev/yee0802/contact/1")
      .then((res) => res.json())
      .then((data) => setUser(data));
  };

  useEffect(fetchUser, []);

  return (
    <div className="profile-icon">
      {!user ? "..." : user.firstName.charAt(0) + user.lastName.charAt(0)}
    </div>
  );
}
