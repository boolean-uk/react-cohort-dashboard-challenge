import { useContext } from "react"
import "../../styles/main.css"
import CommentSection from "../NewsFeed/CommentSection"
import PostBody from "../NewsFeed/PostBody"
import DataContext from "../../DataContext"
import { useParams } from "react-router-dom"

export default function SinglePost() {
    const { posts } = useContext(DataContext)
    //THIS IS STRING!!!!
    const { postId } = useParams()
    const post = posts.find(p => p.id === Number(postId))

    return (
        <div className="main">
            <ul className="post-section">
                <li className="single-post">
                    <PostBody post={post}/>
                    <CommentSection post={post}/>
                </li>
            </ul>
        </div>
    )
}