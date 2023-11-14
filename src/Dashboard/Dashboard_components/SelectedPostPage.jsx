import PostListItem from "../../Post/PostListItem"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function SelectedPostPage({mockLoggedInUserId, setReloadPostList, reloadPostList, reloadComments, setReloadComments, reloadContacts}) {
  const [post, setPost] = useState(null);

  const { id } = useParams();

  const getPost = () => {
    fetch(`https://boolean-api-server.fly.dev/Chloe070196/post/${id}`)
      .then((r) => r.json())
      .then((data) => setPost(data));
  };

  useEffect(getPost, []);

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
