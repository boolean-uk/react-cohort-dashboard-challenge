import NavElement from "./NavElement"

function LeftNav() {

  return (
    <nav className="sidebar weak-shadow">
      <NavElement 
        linksTo={'/'}
        icon={'src\\assets\\home-icon.svg'}
        name={"Home"}
      />
      <NavElement 
        linksTo={'/'}
        icon={'src\\assets\\profile-icon.svg'}
        name={'Profile'}
      />
    </nav>
  )
}

export default LeftNav