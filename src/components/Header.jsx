import { useNavigate } from "react-router-dom";
import ProfileImg from "./Profile/ProfileImg";
import { useState, useEffect } from "react";

export default function Header () {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)

  const loadUser = () => {
    const baseURL = "https://boolean-api-server.fly.dev"
    const endpoint = `/AllyDouillette/contact/1`

    fetch(baseURL+endpoint)
    .then(response => response.json())
    .then(data => setUser(data))
    .catch((error) => console.log(error))
  }

  useEffect(loadUser, [])

  const handleClick = () => {
    console.log("clicked")
    navigate("/profile")
  }

  if (!user) return

  return (
    <header>
      <span id="logo">
        <img
        src="../_assets/title-header.svg"
        className="logo"
        />
      </span>
      <span id="profile" onClick={() => handleClick()} >
        <ProfileImg contactId={1} initials={user.firstName[0]+user.lastName[0]} size={"normal"}/>
      </span>
    </header>
  )
}