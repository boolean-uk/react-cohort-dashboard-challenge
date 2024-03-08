import { useContext } from 'react'
import headerLogo from '../../assets/title-header.svg'
import ProfilePicture from '../ProfilePicture/ProfilePicture'
import { UserContext } from '../../App'

function Header() {
  const { user } = useContext(UserContext)

  return (
    <header className='header'>
      <img className="header-logo" src={headerLogo} alt='Title header logo'/>
        <ProfilePicture user={user}/>
  </header>
  )
}

export default Header
