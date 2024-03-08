import { useNavigate } from "react-router-dom"

function NavElement(props) {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(props.linksTo)
  }

  return(
    <div className="nav-element" onClick={() => handleClick()}>
      <img src={props.icon} />
      <span>{props.name}</span>
    </div>
  )
}

export default NavElement