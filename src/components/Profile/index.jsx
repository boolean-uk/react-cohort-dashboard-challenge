import '../../styles/profile.css'
import ProfileForm from './components/ProfileForm'

function Profile({ URL, setShouldGetPosts, setShouldGetLoggedInUser }) {

    return (
        <section className='profile'>
            <h2 className='profile-title'>Profile</h2>
            <ProfileForm URL={URL} setShouldGetPosts={setShouldGetPosts} setShouldGetLoggedInUser={setShouldGetLoggedInUser} />
        </section>
    )
}

export default Profile