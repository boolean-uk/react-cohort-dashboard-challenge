import UserBanner from "../../../components/UserBanner"

function ProfileHeader() {
  const fullName = 'Alex Walker'

  return (
    <div className='profile-header'>
      <UserBanner />
      <h2>{fullName}</h2>
    </div>
  )
}

export default function ProfileForm() {

  return (
    <form className='profile-form box-container box-container-white'>
      <ProfileHeader />

    </form>
  )
}