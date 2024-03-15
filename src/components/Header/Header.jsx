/* eslint-disable react/prop-types */
import header from '../../assets/header-logo.svg'

export default function Header({currentUser}) {
  const { firstName = '', lastName = '', favouriteColour } = currentUser
  const firstInitial = firstName && firstName[0]
  const lastInitial = lastName && lastName[0]

  return (
    <div className="header">
      <img className="header-logo" src={header} alt="Header Logo" /><br></br>
      <div className="profile-icon-header" style={{ background: favouriteColour }}>
      {firstInitial} {lastInitial}
      </div>

    </div>
  )
}
