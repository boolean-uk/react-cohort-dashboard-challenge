import { useContext, useEffect, useState } from "react"
import { CohortContext } from "@/App"
import PropTypes from 'prop-types';
import UserIcon from "@/components/UserIcon"

import "./styles.css"
import { useNavigate } from "react-router-dom";

export default function Comment({comment}) {
    const { users } = useContext(CohortContext)

    const navigate = useNavigate()

    const [user, setUser] = useState(null)

    useEffect(() => {
        setUser(users.find(user => user.id === comment.contactId))
    }, [users])

    if (!user) return null

    return (
        <div className="comment">
            <UserIcon userToIcon={user}/>
            <div className="comment-content">
                <h5 onClick={() =>navigate(`/profile/${user.id}`)} >
                    {user.firstName} {user.lastName}
                </h5>
                <p>{comment.content}</p>
            </div>
        </div>
    )
}

Comment.propTypes = {
    comment: PropTypes.object,
  };