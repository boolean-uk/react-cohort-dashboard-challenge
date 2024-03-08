import { useContext, useEffect, useState } from 'react'
import title_header from '../assets/title-header.svg'
import ProfilePicture from './profile/ProfilePicture'
import { UserContext } from '../contexts/UserContext'
import { Link, useNavigate } from 'react-router-dom'
export default function Header() {
  const user = useContext(UserContext)
  const [color, setColor] = useState('green');
  const [initials, setInitials] = useState('UN');
  const { navigate } = useNavigate()

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
      <Link to='/'>
      <img onClick={() => navigate("/")} className='titleImg' src={title_header} alt="home icon" />
      </Link>
    </div>
    
    <div className="header darkBlue">
      <ProfilePicture initials={initials} color={color} />
    </div>

  </div>
  )
}
