import CommentSection from "./CommentSection";
import PostBody from "./PostBody";

export default function Post() {
    return (
        <li className="single-post">
            <PostBody />
            <CommentSection />
        </li>
    )
}