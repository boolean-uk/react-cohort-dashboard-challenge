import { useContext, useEffect, useState } from 'react'
import title_header from '../assets/title-header.svg'
import ProfilePicture from './profile/ProfilePicture'
import { UserContext } from '../contexts/UserContext'
export default function Header() {
  const user = useContext(UserContext)
  const [color, setColor] = useState('green');
  const [initials, setInitials] = useState('UN');

  useEffect(() => {
    if(user.favouriteColour){
      setColor(user.favouriteColour)
    }
    if(user.firstName && user.lastName){
      setInitials(`${user.firstName[0]}${user.lastName[0]}`)
    }
  }, [user])

  return (
  <div className='header-container'>
    <div className="header darkBlue">
      <img className='titleImg' src={title_header} alt="home icon" />
    </div>
    
    <div className="header darkBlue">
      <ProfilePicture initials={initials} color={color} />
    </div>

  </div>
  )
}
