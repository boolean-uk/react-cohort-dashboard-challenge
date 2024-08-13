import { getInitials } from "../../utils/functions"

const InitialsButton = ({ currentUser }) => {
  return (
    <div>
        <button id="userInitials">{getInitials(currentUser)}</button>
    </div>
  )
}

export default InitialsButton