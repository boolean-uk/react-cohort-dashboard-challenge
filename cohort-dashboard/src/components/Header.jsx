import { useEffect, useState } from "react";
import titleHeaderLogo from "../assets/title-header-svg.svg";
import ProfileIcon from "./ProfileIcon";

export default function Header() {
  const [user, setUser] = useState("");

  const fetchUser = () => {
    fetch("https://boolean-api-server.fly.dev/yee0802/contact/1")
      .then((res) => res.json())
      .then((data) => {
        setUser(data.firstName.charAt(0) + data.lastName.charAt(0));
      });
  };

  useEffect(fetchUser, []);

  return (
    <header>
      <img src={titleHeaderLogo} alt="title-header-logo" width={340} />
      <ProfileIcon user={user} />
    </header>
  );
}
