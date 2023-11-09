import HomeIcon from './components/HomeIcon'
import ProfileIcon from './components/ProfileIcon'

import '../../styles/navigation.css'

function Navigation() {

    return (
        <nav className='navigation-menu'>
            <HomeIcon></HomeIcon>
            <ProfileIcon></ProfileIcon>
        </nav>
    )
}

export default Navigation