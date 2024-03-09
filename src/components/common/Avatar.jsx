import { useContext } from "react"
import { MetaContext } from "../../App"
import PropTypes from 'prop-types'

function Avatar({contactId}) {
  const {contacts, loggedIn} = useContext(MetaContext)
  let initials = "NN" //No Name
  let colour = "rgb(100, 100, 100)"

  //Disgusting walkaround to get logged in user's info. I am unhappy with this.
  if(loggedIn !== undefined) {
    const contact = loggedIn
    initials = contact.firstName.charAt(0) + contact.lastName.charAt(0)
    colour = contact.favouriteColour
  }

  if (contacts.find(c => c.id === contactId) !== undefined) {
    const contact = contacts.find(c => c.id === contactId)
    initials = contact.firstName.charAt(0) + contact.lastName.charAt(0)
    colour = contact.favouriteColour
  }

  function getRandomColor() {
    // Generate random RGB values. This was something cool (I think) that made a random color based on the contactId before I remembered that contacts has a favourite color X)
    const r = Math.floor((contactId * 47) % 256);
    const g = Math.floor((contactId * 61) % 256);
    const b = Math.floor((contactId * 89) % 256);
    // Construct a color string in the format "rgb(r, g, b)"
    return `rgb(${r}, ${g}, ${b})`;
  }

    return (
      <div className="avatar">
        <div className="avatar-circle" style={{ backgroundColor: colour }}>
          <span className="initials">{initials}</span>
        </div>
      </div>
    );
  }

  Avatar.propTypes = {
    contactId: PropTypes.number
  }
  
  export default Avatar