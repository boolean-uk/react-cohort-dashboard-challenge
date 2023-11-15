import PostListItem from "../../Post/PostListItem"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import getData from "../../../js_functions/get";

export default function SelectedPostPage({mockLoggedInUserId, setReloadPostList, reloadPostList, reloadComments, setReloadComments, reloadContacts}) {
  const [post, setPost] = useState(null);

  const { id } = useParams();

  const getPost = () => {
    getData(`post/${id}`, setPost)
  };

  useEffect(getPost, [id]);

  return post ? (
    <>
    <main>
      <PostListItem 
              post={post} 
              reloadContacts={reloadContacts}
              setReloadPostList={setReloadPostList} 
              reloadPostList={reloadPostList} 
              mockLoggedInUserId={mockLoggedInUserId}
              setReloadComments={setReloadComments}
              reloadComments={reloadComments}
        />
    </main>
    </>
  ) : (
    <>
      <p>Loading...</p>
    </>
  );
}
