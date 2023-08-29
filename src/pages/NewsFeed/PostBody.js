import UserIcon from "../../components/UserIcon";
import PostBodyInfo from "./PostBodyInfo";
import PostBodyMsg from "./PostBodyMsg";
import { useContext } from "react";
import DataContext from "../../DataContext";
import PostBodyActions from "./PostBodyActions";

export default function PostBody(props) {
    const {users} = useContext(DataContext)
    const {post} = props
    const user = users.find(u => post.userId === u.id)
    return (
        <div className="post-body">
            <UserIcon user={user}/>
            <PostBodyInfo author={user.name} title={post.title} id={post.id} userId={post.userId}/>
            <PostBodyMsg msg={post.body}/>
            <PostBodyActions postId={post.id} posterId={post.userId}/>
        </div>
    )
}