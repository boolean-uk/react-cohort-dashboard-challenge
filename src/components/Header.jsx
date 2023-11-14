import { useNavigate } from "react-router-dom";
import ProfileImg from "./Profile/ProfileImg";

export default function Header () {
  const navigate = useNavigate()
  
  return (
    <header>
      <span id="logo">
        <img onClick={() => navigate("/")}
        src="../_assets/title-header.svg"
        className="logo"
        />
      </span>
      <span id="profile">
        <ProfileImg contactId={1} size={"normal"}/>
      </span>
    </header>
  )
}