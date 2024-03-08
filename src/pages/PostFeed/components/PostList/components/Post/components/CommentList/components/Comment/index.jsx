import { useContext, useEffect, useState } from "react"
import { CohortContext } from "@/App"
import UserIcon from "@/components/UserIcon"

import "./styles.css"

export default function Comment({comment}) {
    const { users } = useContext(CohortContext)

    const [user, setUser] = useState(null)

    useEffect(() => {
        setUser(users.find(user => user.id === comment.contactId))
    }, [users])

    if (!user) return null

    return (
        <div className="comment">
            <UserIcon userToIcon={user}/>
            <div className="comment-content">
                <h5>{user.firstName} {user.lastName}</h5>
                <p>{comment.content}</p>
            </div>
        </div>
    )
}