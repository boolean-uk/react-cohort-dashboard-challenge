import { useNavigate } from "react-router-dom"

export default function MenuButton(props) {
    const {active, icon, label, path} = props
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`${path}`)
    }

    return (
        //need to change active button
        <li className={`menu-item ${active ? 'active':''}`} onClick={handleClick}>
            {icon}
            <p className="menu-item-text">
                {label}
            </p>
        </li>
    )
}