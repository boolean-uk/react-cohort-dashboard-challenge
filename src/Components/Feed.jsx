import NewPost from "../Subcomponents/NewPost"
import PostCard from "../Subcomponents/PostCard"
export default function Feed () {
    return (
        <div className="m-5 flex flex-col gap-3">
        <NewPost />
        <PostCard />
        </div>
    )
}