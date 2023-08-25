import titleHeader from '../assets/title-header.svg'
import UserBanner from './UserBanner'

function HeaderLogo() {
  return <img src={titleHeader} alt='title header'/>
}

export default function Header() {
  const name = 'Alex Walker'
  
  return (
    <header className='header'>
      <HeaderLogo />
      <UserBanner name={name} />
    </header>
  )
}