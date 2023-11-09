import homeIcon from '../../../_assets/title-header.svg'

import '../../styles/header.css'

function Header() {

    return (
        <header className="header grid">
            <img className='header-title-icon' src={homeIcon} width={300} alt="title icon" />
            <div className='profile-circle'></div>
        </header>
    )
}

export default Header