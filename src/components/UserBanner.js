import { Link } from "react-router-dom"

export default function UserBanner({ name, id }) {
  if (!name)
    name = 'TODO: get name'
  const initials = name[0] + name[name.indexOf(' ') + 1]
  
  return (
    <Link to={`/profile/${id}`}>
      <span className='user-banner'>{initials}</span>
    </Link>
  )
}