import '../../styles/profile.css'
import ProfileForm from './components/ProfileForm'
import ProfileUserHeader from './components/ProfileUserHeader'
import { useParams } from 'react-router-dom'

function Profile({ URL, setShouldGetLoggedInUser }) {

    const { contactId } = useParams()

    return (
        <section className='profile'>
            <h2 className='profile-title'>Profile</h2>
            <section className='profile-container grid'>
                <ProfileUserHeader URL={URL} contactId={contactId} />
                <ProfileForm URL={URL} setShouldGetLoggedInUser={setShouldGetLoggedInUser} contactId={contactId} />
            </section>
        </section>
    )
}

export default Profile