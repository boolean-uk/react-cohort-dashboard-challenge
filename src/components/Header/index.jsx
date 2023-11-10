import HeaderTitle from './components/HeaderTitle'
import LoggedInProfileCircle from '../Shared/LoggedInProfileCircle'

import '../../styles/header.css'

function Header({ loggedInUserInitials }) {

    return (
        <header className='header grid'>
            <HeaderTitle />
            <LoggedInProfileCircle loggedInUserInitials={loggedInUserInitials} />
        </header>
    )
}

export default Header