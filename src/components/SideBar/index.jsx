import { Link } from "react-router-dom"

function Sidebar() {
  return (
    <div>
        <ul>
            <li><Link to = "/feed" >Home</Link></li>
            <li><Link to = "/profile"> Profile</Link></li>
        </ul>

    </div>
  )
}

export default Sidebar