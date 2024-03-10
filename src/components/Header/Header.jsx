import logo from '../../assets/logo.svg'
import { useNavigate } from 'react-router-dom'
  import { useContext } from 'react'
import { AppContext } from "../../App"

export default function Header(){
  const { user } = useContext(AppContext)
  const navigate = useNavigate()

  const handleClick = () => {
    if (user){
      navigate('/profile')
    }
  }

  const GetInitals = () => {
    let intials = ""
    const firstName = user.firstName.trim()
    const lastName = user.lastName.trim()
    if (firstName !== "") intials += firstName.charAt(0)
    if (lastName !== "") intials += lastName.charAt(0)
    return intials
  }

    return (
        <div className='header-container'>
          <img className='header-logo' style={{width: '255px'}} src={logo}></img>
          <div onClick={handleClick} className='header-profile' style={{backgroundColor: user ? user.favouriteColour : 'black'}}>
            {user && <p className='font-paragraph'>{GetInitals()}</p>}
          </div>
        </div>
    )
}