import { useNavigate } from "react-router-dom"

export default function MenuButton(props) {
    const {id, active, icon, label, path} = props.tab
    const {tabs} = props
    const navigate = useNavigate()

    const handleClick = () => {
        tabs.map(t => {
            if (t.id === id){
                t.active = true
            } else {
                t.active = false
            }
        })
        navigate(`${path}`)
    }

    return (
        <li className={`menu-item ${active ? 'active':''}`} onClick={handleClick}>
            {icon}
            <p className="menu-item-text">
                {label}
            </p>
        </li>
    )
}