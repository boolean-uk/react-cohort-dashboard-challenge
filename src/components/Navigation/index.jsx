import Home from './components/Home'
import Profile from './components/Profile'

import '../../styles/navigation.css'

function Navigation() {

    return (
        <nav className='navigation-menu'>
            <Home></Home>
            <Profile></Profile>
        </nav>
    )
}

export default Navigation