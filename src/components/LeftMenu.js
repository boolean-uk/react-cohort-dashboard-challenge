import '../styles/left_menu.css'
import HomeIcon from './HomeIcon'
import ProfileIcon from './ProfileIcon'

const menuItems = {
  home: HomeIcon,
  profile: ProfileIcon
}

function MenuItem({ item, isActive }) {
  /** NOTE: using dynamic component name as explained here:
   * https://stackoverflow.com/questions/29875869/react-jsx-dynamic-component-name */
  const ItemButton = menuItems[item]
  const activeClass = isActive ? 'active' : 'inactive'
  const capitalizedItem = item[0].toUpperCase() + item.slice(1)

  return (
    <li className={`menu-item ${activeClass}`}>
      <ItemButton isActive={isActive} />
      <p>{capitalizedItem}</p>
    </li>
  )
}

export default function LeftMenu() {
  return (
    <nav className='left-menu'>
      <ul>
        <MenuItem item={'home'} isActive={true} />
        <MenuItem item={'profile'} isActive={false} />
      </ul>
    </nav>
  )
}