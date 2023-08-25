import UserIcon from "../../components/UserIcon";
import PostBodyInfo from "./PostBodyInfo";
import PostBodyMsg from "./PostBodyMsg";

export default function PostBody() {
    return (
        <div className="post-body">
            <UserIcon />
            <PostBodyInfo />
            <PostBodyMsg />
        </div>
    )
}