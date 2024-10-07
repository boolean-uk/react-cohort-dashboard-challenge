import CreatePost from "./CreatePost"
import PostList from "./PostList"

function Home() {
    return (
        <div className="home">
            <CreatePost/>
            <PostList/>
        </div>
    )
}

export default Home