import homeIcon from '../../../_assets/title-header.svg'

function Header() {

    return (
        <header className="header">
            <img className='header-title-icon' src={homeIcon} width={300} alt="home icon" />
            <div className='profile-circle'></div>
        </header>
    )
}

export default Header