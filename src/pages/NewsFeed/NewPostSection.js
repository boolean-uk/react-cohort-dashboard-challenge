import UserIcon from "../../components/UserIcon";
import NewPost from "./NewPost";
import { useContext } from "react"
import DataContext from "../../DataContext";

export default function NewPostSection() {
    const {users} = useContext(DataContext)
    return (
        <div className="new-post-section">
            <UserIcon user={users[0]}/>
            <NewPost />
        </div>
    )
}