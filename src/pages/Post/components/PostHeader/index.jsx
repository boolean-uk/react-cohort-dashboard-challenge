import UserIcon from "@/components/UserIcon"

import "./styles.css"

export default function PostHeader({post, user}) {

    return (
        <div className="post-list-item-header">
            <UserIcon userToIcon={user}/>
            <div className="post-list-item-header-text">
                <h5>{user.firstName} {user.lastName}</h5>
                <p>{post.title}</p>
            </div>
        </div>
    )
}