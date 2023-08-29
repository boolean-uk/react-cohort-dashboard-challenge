import { useContext } from "react"
import DataContext from "../DataContext"
import { useNavigate } from 'react-router-dom'

export default function UserIcon(props) {
    const {user} = props
    const {tabs, users} = useContext(DataContext)
    const navigate = useNavigate()
    let name
    if (user === undefined) {
        name = ''
    } else {
        const tmpArr = user.name.split(' ')
        name = tmpArr[0][0]+tmpArr[1][0]
    }

    const handleClick = () => {
        if(users.includes(user)){
            tabs.map(t => {
                if (t.label === 'Profile'){
                    t.active = true
                } else {
                    t.active = false
                }
            })
            navigate(`/user/${user.id}`)
        }
    }

    return (
        <p className="user-icon" onClick={handleClick}>
            {name}
        </p>
    )
}