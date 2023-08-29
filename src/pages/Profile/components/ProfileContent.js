import UserBanner from "../../../components/UserBanner";
import ProfileForm from "./ProfileForm";

function ProfileHeader({ user }) {
  return (
    <div className='profile-header'>
      <UserBanner name={user.name} />
      <h2 className='name'>{user.name}</h2>
    </div>
  )
}

export default function ProfileContent({ user }) {

  return (
    <div className='profile-content box-container box-container-white'>
      <ProfileHeader user={user} />
      <ProfileForm user={user} />
    </div>
  )
}