import { useParams } from "react-router-dom";
import UserBanner from "../../../components/UserBanner";
import ProfileForm from "./ProfileForm";
import { useContext, useEffect, useState } from "react";
import DataContext from "../../../DataContext";

function ProfileHeader({ user }) {
  return (
    <div className='profile-header'>
      <UserBanner name={user.name} />
      <h2 className='name'>{user.name}</h2>
    </div>
  )
}

export default function ProfileContent() {
  const [viewUser, setViewUser] = useState(null)
  const params = useParams()
  const { user } = useContext(DataContext)
  // check if logged in user is viewing their profile, or somebody else's
  const viewingOther = params.id && (user.id !== Number(params.id))

  async function getUser() {
    if (viewingOther) {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      const json = await response.json()
      setViewUser(json)
    } else {
      setViewUser(user)
    }
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    viewUser &&
      <div className='profile-content box-container box-container-white'>
        <ProfileHeader user={viewUser} />
        <ProfileForm user={viewUser} />
      </div>
  )
}