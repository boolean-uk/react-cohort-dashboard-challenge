import UserBanner from "../../../components/UserBanner"

function ProfileHeader() {
  const name = 'Alex Walker'

  return (
    <div className='profile-header'>
      <UserBanner name={name} />
      <h2>{name}</h2>
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