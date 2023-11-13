import HomeButton from './subcomponents/homeButton'
import ProfileButton from './subcomponents/profileButton'

function Menu() {
    return (
        <>
        <nav className="menu">
            <ul>
                <HomeButton/>
                <ProfileButton/>
            </ul>
        </nav>
        </>
    )
}

export default Menu;