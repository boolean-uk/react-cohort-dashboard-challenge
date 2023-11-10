import homeIcon from '../../../_assets/title-header.svg'

import '../../styles/header.css'

function Header({ loggedInUserInitials }) {

    return (
        <header className='header grid'>
            <img className='header-title-icon' src={homeIcon} width={300} alt="title icon" />
            <div className='logged-in-user profile-circle grid'>
                <p className='initials-text'>{loggedInUserInitials}</p>
            </div>
        </header>
    )
}

export default Header