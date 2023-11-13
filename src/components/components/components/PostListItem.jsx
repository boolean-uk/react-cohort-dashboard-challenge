import PostContainer from "./components/components/PostContainer"
import CommentListContainer from "./components/components/CommentListContainer"
import AddCommentContainer from "./components/components/AddCommentContainer"

export default function PostListItem({post, setReloadPostList, reloadPostList, mockLoggedInUserId, reloadComments, setReloadComments, reloadContacts}) {
    return(
        <>
            <li className="post-list-element">
                <PostContainer post={post} reloadContacts={reloadContacts}/>
                <CommentListContainer postId={post.id} reloadComments={reloadComments} setReloadComments={setReloadComments}/>
                <AddCommentContainer 
                    post={post}
                    setReloadPostList={setReloadPostList}
                    reloadPostList={reloadPostList}
                    mockLoggedInUserId={mockLoggedInUserId} 
                    setReloadComments={setReloadComments}
                    reloadComments={reloadComments}/>   
            </li>
        </>
    )
}