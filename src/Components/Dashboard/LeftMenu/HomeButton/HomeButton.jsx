import { Link } from 'react-router-dom'
import homeIcon from '../../../../assets/home-icon.svg'
import "./HomeButton.css"

function HomeButton() {
  return (
    <Link to="/">
      <div className='home-button'>
        <img src={homeIcon} alt="Home button" />
        <p>Home</p>
      </div>
    </Link>
  )
}

export default HomeButton
