import PostContainer from "./components/components/PostContainer"
import CommentListContainer from "./components/components/CommentListContainer"
import AddCommentContainer from "./components/components/AddCommentContainer"

export default function PostListItem({post}) {
    return(
        <>
            <li>
                <PostContainer post={post}/>
                <CommentListContainer postId={post.id}/>
                <AddCommentContainer />   
            </li>
        </>
    )
}