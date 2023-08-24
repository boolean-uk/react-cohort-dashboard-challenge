export default function MenuButton(props) {
    const {active, icon, label} = props

    return (
        <li className={`menu-item ${active ? 'active':''}`}>
            {icon}
            <p className="menu-item-text">
                {label}
            </p>
        </li>
    )
}