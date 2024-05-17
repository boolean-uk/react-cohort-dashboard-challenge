export default function NavItem({svg, itemName, active}) {
    return (
        <li className={active.toUpperCase() === itemName.toUpperCase() ? "active"  : ""}>
            {svg}
            <p>{itemName}</p>
        </li>
    )
}
