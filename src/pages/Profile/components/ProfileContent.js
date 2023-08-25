import UserBanner from "../../../components/UserBanner";
import ProfileForm from "./ProfileForm";

function ProfileHeader({ name }) {
  return (
    <div className='profile-header'>
      <UserBanner name={name} />
      <h2 className='name'>{name}</h2>
    </div>
  )
}

export default function ProfileContent({ user }) {

  return (
    <div className='profile-content box-container box-container-white'>
      <ProfileHeader name={user.name} />
      <ProfileForm user={user} />
    </div>
  )
}