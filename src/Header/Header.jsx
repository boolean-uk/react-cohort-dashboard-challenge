import LogoAndTitle from "../Header/LogoAndTitle";
import ProfileIcon from "../Header/ProfileIcon";
import HomeLogo from "../Navigation/HomeLogo.svg";


function Header () {

  return (
      <header className = "header">
          <div className = "header-elements">
              <div className = "header-logo">
                 <LogoAndTitle/>
              </div>
              <div className = "header-profile-icon">
                  <ProfileIcon/>
              </div>
          </div>
      </header>
  )
}

export default Header;