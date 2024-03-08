import UserIcon from "@/components/UserIcon"
import PropTypes from 'prop-types';

import "./styles.css"
import { useNavigate } from "react-router-dom"

export default function PostHeader({post, user}) {

    const navigate = useNavigate()

    return (
        <div className="post-list-item-header">
            <UserIcon userToIcon={user}/>
            <div className="post-list-item-header-text">
                <h5 onClick={() =>navigate(`/profile/${user.id}`)} >{user.firstName} {user.lastName}</h5>
                <p onClick={() => navigate(`/post/${post.id}`)}>{post.title}</p>
            </div>
        </div>
    )
}

PostHeader.propTypes = {
    post: PropTypes.object,
    user: PropTypes.object,
  };