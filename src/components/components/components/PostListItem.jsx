import PostContainer from "./components/components/PostContainer"
import CommentListContainer from "./components/components/CommentListContainer"
import AddCommentContainer from "./components/components/AddCommentContainer"

export default function PostListItem() {
    return(
        <>
            <li>
                <PostContainer />
                <CommentListContainer />
                <AddCommentContainer />   
            </li>
        </>
    )
}