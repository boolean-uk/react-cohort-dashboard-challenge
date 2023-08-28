export default function UserBanner(props) {
  const name = props.name ? props.name : 'TODO: get name'
  const initials = name[0] + name[name.indexOf(' ') + 1]
  
  return (
    <span className='user-banner'>{initials}</span>
  )
}