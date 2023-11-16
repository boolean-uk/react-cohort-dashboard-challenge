import { useEffect, useState } from "react";
import Logo from "../assets/cohort.svg";

export default function Header () {
  const [contact, setContact] = useState({}) 
  useEffect(() => {fetch("https://boolean-api-server.fly.dev/SukunimiVinod1/contact/1").then(res => res.json()).then(data => setContact(data))}, [])
    return (
        <>
        <header className="header">
        <img className="logo" src={Logo} alt="Logo" />
        <h1>Cohort Manager</h1>
        {Object.keys(contact).length > 0 && <div className="user-badge">{contact.firstName[0]}{contact.lastName[0]}</div>}
        
        </header>
      </>
    )
}