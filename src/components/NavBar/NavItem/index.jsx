export default function NavItem({svg, itemName}) {
    return (
        <li>
            {svg}
            <p>{itemName}</p>
        </li>
    )
}
