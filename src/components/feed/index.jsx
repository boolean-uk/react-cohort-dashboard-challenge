// Feed.jsx
import { CreatePost } from "./CreatePost"
import '/src/styles/Feed/index.css'

export const Feed = () => {
    return (
        <div className="feed">
            <CreatePost />
            <p>Posts will go here in the future</p>
        </div>
    )
}