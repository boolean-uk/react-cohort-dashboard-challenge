import homeIcon from '../../../../_assets/home-icon.svg'

function HomeIcon({ currentSelect, setCurrentSelect }) {

     function homeHighlight(currentSelect) {
        if (currentSelect === 'home') {
            return 'current-select'
        }
        else return 'not-current'
    }

    return (
        <div className={`nav-icon-container grid ${homeHighlight(currentSelect)}`} onClick={() => setCurrentSelect('home')}>
            <img className='nav-icon-img' src={homeIcon} alt="home icon" />
            <p className='nav-icon-text'>Home</p>
        </div>
    )
}

export default HomeIcon