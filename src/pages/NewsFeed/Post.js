import CommentSection from "./CommentSection";
import PostBody from "./PostBody";

export default function Post(props) {
    const {post} = props
    return (
        <li className="single-post">
            <PostBody post={post}/>
            <CommentSection post={post}/>
        </li>
    )
}