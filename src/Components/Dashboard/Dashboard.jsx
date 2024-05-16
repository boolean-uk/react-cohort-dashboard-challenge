import profile from '../../assets/svg/profile-icon.svg'
import title from '../../assets/svg/title-header.svg'
import home from '../../assets/svg/home-icon.svg'
import '../../Styling/Dashboard.css'
import {Link} from 'react-router-dom'
import { useContext } from 'react'
import { UsersContext } from '../../App'

export default function Dashboard() {

    const {users} = useContext(UsersContext)

    const loggedInUser = users.find((user) => user.id)


    return (
        <>
        <header className="header">
            <div className='logo-container'>
                <img src={title} alt='cohort manager logo' id='logo'/>
            </div>
            <div id='header-profile' className='profile-initials' >
                {/* <p className="initials">{loggedInUser.firstName[0]}{loggedInUser.lastName[0]}</p> */}
            </div>
        </header>
        <section className="left-side">
            <Link to='/home'>
            <div className='dashboard-container'>
                <img src={home} alt='home icon' className='icon'/>
                <p>Home</p>
            </div>
            </Link>
            <Link to='/profile'>
            <div className='dashboard-container'>
                <img src={profile} alt='profile icon' className='icon'/>
                <p>Profile</p>
            </div>
            </Link>
        </section>
        </>
    )
}