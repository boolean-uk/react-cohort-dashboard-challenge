import PostContainer from "./components/PostContainer"
import CommentContainer from "./components/CommentContainer"
import AddCommentContainer from "./components/AddCommentContainer"

export default function PostListItem() {
    return(
        <>
            <li>
                <PostContainer />
                <CommentContainer />
                <AddCommentContainer />   
            </li>
        </>
    )
}