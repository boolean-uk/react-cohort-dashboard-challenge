import PostContainer from "./components/components/PostContainer"
import CommentListContainer from "./components/components/CommentListContainer"
import AddCommentContainer from "./components/components/AddCommentContainer"

export default function PostListItem({post, setReloadPostList, reloadPostList, mockLoggedInUserId}) {
    return(
        <>
            <li className="post-list-element">
                <PostContainer post={post}/>
                <CommentListContainer postId={post.id}/>
                <AddCommentContainer 
                    post={post}
                    setReloadPostList={setReloadPostList}
                    reloadPostList={reloadPostList}
                    mockLoggedInUserId={mockLoggedInUserId} />   
            </li>
        </>
    )
}