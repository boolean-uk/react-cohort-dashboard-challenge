import '../../Styling/Feed.css'
import CreatePost from './CreatePost'
import Posts from './Posts/PostCard/Posts'



function Feed() {

    return (
            <section className="feed">
                <CreatePost />
                <Posts />
            </section>
    )
}
export default Feed