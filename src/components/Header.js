import titleHeader from '../assets/title-header.svg'
import UserBanner from './UserBanner'

export default function Header() {
  
  return (
    <header>
      <img src={titleHeader} alt='title header'/>
      <UserBanner />
    </header>
  )
}