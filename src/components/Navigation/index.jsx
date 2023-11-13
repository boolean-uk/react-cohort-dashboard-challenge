import HomeIcon from './components/HomeIcon'
import ProfileIcon from './components/ProfileIcon'

import '../../styles/navigation.css'
import { useState } from 'react'

function Navigation() {

    const [currentSelect, setCurrentSelect] = useState('home')

    return (
        <nav className='navigation-menu grid'>
            <HomeIcon currentSelect={currentSelect} setCurrentSelect={setCurrentSelect}  />
            <ProfileIcon currentSelect={currentSelect} setCurrentSelect={setCurrentSelect}  />
        </nav>
    )
}

export default Navigation