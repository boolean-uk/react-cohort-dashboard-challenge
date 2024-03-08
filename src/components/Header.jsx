import { useContext } from "react"
import ProfilePicture from "./reusable/ProfilePicture.jsx"
import { AppDataContext } from "../App.jsx"

function Header() {
  const context = useContext(AppDataContext)



  return (
    <header className="header">
      <img className="header-logo" src="src\assets\header-logo.svg" />

    </header>
  )
}

export default Header