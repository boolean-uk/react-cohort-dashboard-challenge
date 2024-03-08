import HomeButton from './HomeButton/HomeButton'
import ProfileButton from './ProfileButton/ProfileButton'

function LeftMenu() {
  return (
    <nav className='left-menu'>
      <HomeButton />
      <ProfileButton />
    </nav>
  )
}

export default LeftMenu
