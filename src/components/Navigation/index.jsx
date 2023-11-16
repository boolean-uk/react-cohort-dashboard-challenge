import HomeIcon from './components/HomeIcon'
import ProfileIcon from './components/ProfileIcon'

import '../../styles/navigation.css'

function Navigation({ currentSelect, setCurrentSelect, loggedInUser }) {

    return (
        <nav className='navigation-menu grid'>
            <HomeIcon currentSelect={currentSelect} setCurrentSelect={setCurrentSelect}  />
            <ProfileIcon currentSelect={currentSelect} setCurrentSelect={setCurrentSelect} loggedInUser={loggedInUser} />
        </nav>
    )
}

export default Navigation
