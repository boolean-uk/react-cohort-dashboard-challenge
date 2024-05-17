import NavLink from "../NavLink"
import './navigation.css'

export default function Navigation() {
    return (
        <div className="navigation">
            <NavLink text='Dashboard' to='/' />
            <NavLink text='Profile' to='/profile' /></div>
    )
}