import { useContext } from 'react'
import ProfilePicturePost from './profile/ProfilePicturePost'
import { UserContext } from '../contexts/UserContext'

export default function CreatePost() {
  const user = useContext(UserContext)

  return (
    <div className='create-post'>
      <ProfilePicturePost initials={`${user.firstName[0]}${user.lastName[0]}`} color={user.favouriteColour} />
      <input type="text" placeholder="What's on your mind?" className='postInput main-background' />
      <div className='postButton'>
        <p>Post</p>
      </div>
    </div>
  )
}
