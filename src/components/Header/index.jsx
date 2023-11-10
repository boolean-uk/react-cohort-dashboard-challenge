import LoggedInProfileCircle from '../Shared/LoggedInProfileCircle'

import homeIcon from '../../../_assets/title-header.svg'

import '../../styles/header.css'

function Header({ loggedInUserInitials }) {

    return (
        <header className='header grid'>
            <img className='header-title-icon' src={homeIcon} width={300} alt="title icon" />
            <LoggedInProfileCircle loggedInUserInitials={loggedInUserInitials} />
        </header>
    )
}

export default Header