import { useParams } from "react-router-dom"
import "./ProfileView.css"
import ProfileInformation from './ProfileInformation/ProfileInformation'

const ProfileView = () => {
    const { id } = useParams()

    return (
        <div className='profile-view-main-container'>
            <h2>Profile</h2>
            <ProfileInformation id={id}/>
        </div>
    )
}

export default ProfileView