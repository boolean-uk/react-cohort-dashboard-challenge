import { useContext } from "react"
import Avatar from "react-avatar"
import ProfilePicture from "./reusable/ProfilePicture.jsx"
import { AppDataContext } from "../App.jsx"

function Header() {
  const context = useContext(AppDataContext)

//<Avatar name="context.currentUser" round="true" color={context.currentUser.favouriteColour} /> can't get it to work

  return (
    <header className="header">
      <img className="header-logo" src="src\assets\header-logo.svg" />
      <div className="avatar-container">
        
      </div>
    </header>
  )
}

export default Header