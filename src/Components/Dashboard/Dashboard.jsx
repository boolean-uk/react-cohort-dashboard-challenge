import profile from '../../assets/svg/profile-icon.svg'
import title from '../../assets/svg/title-header.svg'
import home from '../../assets/svg/home-icon.svg'
import '../../Styling/Dashboard.css'
import {Link} from 'react-router-dom'

export default function Dashboard() {
    return (
        <>
        <header className="header">
            <img src={title} alt='cohort manager logo' id='logo'/>
            <img src={profile} alt='profile icon' className='icon' id='profile-icon-header'/>
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