import UserIcon from "../../components/UserIcon";
import PostBodyInfo from "./PostBodyInfo";
import PostBodyMsg from "./PostBodyMsg";
import { useContext } from "react";
import DataContext from "../../DataContext";

export default function PostBody(props) {
    const {users} = useContext(DataContext)
    const {post} = props
    const user = users.find(u => post.userId === u.id)
    return (
        <div className="post-body">
            <UserIcon user={user}/>
            <PostBodyInfo author={user.name} title={post.title} id={post.id}/>
            <PostBodyMsg msg={post.body}/>
        </div>
    )
}