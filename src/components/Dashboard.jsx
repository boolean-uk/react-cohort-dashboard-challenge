import PostFeedHeader from "./components/PostFeedHeader"
import PostList from "./components/PostList"


export default function Dashboard() {
    return(
        <>  
            <section>
                <PostFeedHeader />
                <PostList />
            </section>
        </>
    )
}