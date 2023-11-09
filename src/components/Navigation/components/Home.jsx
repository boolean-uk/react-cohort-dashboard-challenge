import homeIcon from '../../../../_assets/home-icon.svg'

function Home() {
    
    return (
        <div className='nav-icon-container'>
            <img className='nav-icon-img' src={homeIcon} alt="home icon" />
            <p className='nav-icon-text'>Home</p>
        </div>
    )
}

export default Home