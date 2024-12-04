import PostList from "./components/PostList"
import "../../../../assets/css/Dashboard.css"
import CreatePost from "./components/CreatePost";

function Dashboard() {
    return (
        <div className="Dashboard-main">
            <CreatePost></CreatePost>
            <PostList></PostList>
        </div>
    )
}

export default Dashboard;