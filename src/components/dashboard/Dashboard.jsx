import CreatePost from "./CreatePost"
import Header from "../universal/Header"
import LeftMenu from "../universal/LeftMenu"
import PostList from "./post/PostList"

export default function Dashboard() {
    return (
        <div className="dashboard-container">
            <Header></Header>
            <div className="under-container">
                <LeftMenu></LeftMenu>
                <div className="posts-container">
                    <CreatePost></CreatePost>
                    <PostList></PostList>
                </div>
            </div>
        </div>
    )
}