// Contains all the header html and images
import Icons8 from "../assets/Icons8-logo.svg";


function Header() {
  return (
    <>
     <header className="header">
        <img className="logo" src={Icons8} width={40} alt="logo" />
        <h1 className="h1">Cohort Manager</h1>
        <p className="initials">CH</p>
      </header>
    </>
  )
}

export default Header;