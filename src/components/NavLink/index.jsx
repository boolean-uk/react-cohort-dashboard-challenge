import { Link } from "react-router-dom"

export default function NavLink(props) {
    return (
        <Link to={props.to}>{props.text}</Link>
    )
}