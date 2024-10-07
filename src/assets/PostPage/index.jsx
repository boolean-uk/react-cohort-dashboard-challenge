import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostOverview from "../PostContainer/PostOverview";
import CommentSection from "../CommentsSection";
import AddComment from "../PostContainer/AddComment";

export default function PostPage() {
  const { id } = useParams();
  const [post, setPost] = useState();
  const [creator, setCreator] = useState();

  const fetchPost = async () => {
    const response = await fetch(
      `https://boolean-uk-api-server.fly.dev/LudwigJL/post/${id}`
    );
    const data = await response.json();
    setPost(data);
  };

  const fetchCreator = async () => {
    const response = await fetch(
      `https://boolean-uk-api-server.fly.dev/LudwigJL/contact/${post.contactId}`
    );
    const data = await response.json();
    setCreator(data);
  };

  useEffect(() => {
    fetchPost();
  }, [id]);

  useEffect(()=> {
    if(post && post.contactId){
      fetchCreator();
    }
  }, [post])

  return (
    <>
      <div className="post-container">
        {post && creator &&(
          <>
            <PostOverview post={post} match={creator} />
            <hr width="100%" size="2" />
            <CommentSection post={post} />

          </>
        )}

        

      </div>
    </>
  );
}
