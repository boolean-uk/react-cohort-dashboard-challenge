import '../styles/header.css'

import { useContext } from "react"
import DataContext from "../DataContext"
import HeaderLogo from "./HeaderLogo"
import UserIcon from "./UserIcon"

export default function Header() {
    const {users} = useContext(DataContext)
    return (
        <div className='header'>
            <HeaderLogo />
            <UserIcon user={users[0]}/>
        </div>
    )
}