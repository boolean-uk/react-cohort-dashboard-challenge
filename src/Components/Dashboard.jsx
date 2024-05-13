import profile from '../assets/svg/profile-icon.svg'
import title from '../assets/svg/title-header.svg'
import home from '../assets/svg/home-icon.svg'
import '../Styling/Dashboard.css'

export default function Dashboard() {
    return (
        <>
        <header className="header">
            <img src={title} alt='cohort manager logo' id='logo'/>
            <img src={profile} alt='profile icon' className='icon' id='profile-icon-header'/>
        </header>
        <section className="left-side">
            <div className='container'>
                <img src={home} alt='home icon' className='icon'/>
                <p>Home</p>
            </div>
            <div className='container'>
                <img src={profile} alt='profile icon' className='icon'/>
                <p>Profile</p>
            </div>
        </section>
        </>
    )
}