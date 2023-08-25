export default function UserBanner({ name }) {
  const initials = name[0] + name[name.indexOf(' ') + 1]
  
  return (
    <span className='user-banner'>{initials}</span>
  )
}