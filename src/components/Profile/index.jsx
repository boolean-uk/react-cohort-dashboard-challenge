import '../../styles/profile.css'
import ProfileForm from './components/ProfileForm'

function Profile() {

    return (
        <section className='profile'>
            <h2 className='profile-title'>Profile</h2>
            <ProfileForm></ProfileForm>
        </section>
    )
}

export default Profile