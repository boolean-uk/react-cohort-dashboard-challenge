import HeaderTitle from './components/HeaderTitle'
import LoggedInProfileCircle from '../Shared/LoggedInProfileCircle'

import '../../styles/header.css'
import { useNavigate } from 'react-router-dom'

function Header({ loggedInUser, loggedInUserInitials }) {

    const navigate = useNavigate()

    return (
        <header className='header grid'>
            <HeaderTitle />
            <div className='header-initials-nav' onClick={() => navigate(`/profile/${loggedInUser.id}`)}>
                <LoggedInProfileCircle loggedInUserInitials={loggedInUserInitials} />
            </div>
        </header>
    )
}

export default Header