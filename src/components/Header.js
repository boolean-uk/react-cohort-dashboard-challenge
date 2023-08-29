import { useContext } from 'react'
import titleHeader from '../assets/title-header.svg'
import UserBanner from './UserBanner'
import DataContext from '../DataContext'

function HeaderLogo() {
  return <img src={titleHeader} alt='title header'/>
}

export default function Header() {
  const { user } = useContext(DataContext)
  
  return (
    <header className='header'>
      <HeaderLogo />
      <UserBanner name={user.name} id={user.id} />
    </header>
  )
}