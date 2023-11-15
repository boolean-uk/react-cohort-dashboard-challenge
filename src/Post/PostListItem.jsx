import PostContainer from "./PostContainer";
import { useState } from "react";
// import { useRef } from "react";
import CommentListContainer from "./Comments/CommentListContainer";
import AddCommentContainer from "./Comments/AddCommentContainer";
import deleteData from "../../js_functions/delete";

export default function PostListItem({
  post,
  setReloadPostList,
  reloadPostList,
  mockLoggedInUserId,
  reloadComments,
  setReloadComments,
  reloadContacts,
}) {
  reloadPostList;
  const [edit, setEdit] = useState(false);
  const [scrollTo, setScrollTo] = useState(false)

  const deletePost = () => {
    deleteData(`post/${post.id}`);
    setReloadPostList(!reloadPostList);
  };

//  const liRef = useRef()

  const toggledEditPost = () => {
    setEdit(!edit);
  };
  return (
    <>
      <li className="post-list-element"> 
        <PostContainer
          edit={edit}
          setEdit={setEdit}
          post={post}
          reloadContacts={reloadContacts}
          setReloadComments={setReloadComments}
          reloadPostList={reloadPostList}
          setReloadPostList={setReloadPostList}
        />
        {!edit && (
          <>
            <button onClick={deletePost}>Delete</button>
            <button onClick={toggledEditPost}>Edit</button>
          </>
        )}
        <CommentListContainer
          postId={post.id}
          reloadComments={reloadComments}
          reloadPostList={reloadPostList}
          setReloadComments={setReloadComments}
        />
        <AddCommentContainer
          post={post}
          setReloadPostList={setReloadPostList}
          reloadPostList={reloadPostList}
          mockLoggedInUserId={mockLoggedInUserId}
          setReloadComments={setReloadComments}
          reloadComments={reloadComments}
        />
      </li>
    </>
  );
}
