/* eslint-disable react/prop-types */
import send from '../../assets/send-icon.svg'

export default function Comment({currentUser}) {
  const { firstName = '', lastName = '', favouriteColour } = currentUser
  const firstInitial = firstName && firstName[0]
  const lastInitial = lastName && lastName[0]
  return (
    <div className="post">
      <div className="profile-icon" style={{ background: currentUser.favouriteColour }}>
      {firstInitial} {lastInitial}
      </div>

      <div className="input-wrapper">
        <input type="text" className="text-field-comment" placeholder="Add a comment" /> 
        <img className="send-icon" src={send} alt="send button" />
      </div>
    </div>
  );
}