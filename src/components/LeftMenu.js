import { useState } from 'react'
import '../styles/left_menu.css'
import HomeIcon from './HomeIcon'
import ProfileIcon from './ProfileIcon'
import { Link } from 'react-router-dom'

const menuItems = {
  home: HomeIcon,
  profile: ProfileIcon
}

function MenuItem({ item, isActive, setCurrentTab, linkTo }) {
  /** NOTE: using dynamic component name as explained here:
   * https://stackoverflow.com/questions/29875869/react-jsx-dynamic-component-name
   */
  const ItemIcon = menuItems[item]
  const activeClass = isActive ? 'active' : 'inactive'
  const capitalizedItem = item[0].toUpperCase() + item.slice(1)

  return (
    <Link to={linkTo}>
      <li
        className={`menu-item ${activeClass}`}
        onClick={() => setCurrentTab(item)}
      >
        <ItemIcon isActive={isActive} />
        <p>{capitalizedItem}</p>
      </li>
    </Link>
  )
}

export default function LeftMenu() {
  const [currentTab, setCurrentTab] = useState('home')

  return (
    <nav className='left-menu'>
      <ul>
        <MenuItem item={'home'} isActive={currentTab === 'home'} setCurrentTab={setCurrentTab} linkTo='/' />
        <MenuItem item={'profile'} isActive={currentTab === 'profile'} setCurrentTab={setCurrentTab} linkTo='/profile' />
      </ul>
    </nav>
  )
}