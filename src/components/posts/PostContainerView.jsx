import { useContext, useEffect, useState } from "react";
import PostList from "./PostList";
import "./posts.css";
import { AppContext } from "../../App";
import { useParams } from "react-router-dom";
function PostContainerView() {
    const { posts } = useContext(AppContext)
    const [singlePost, setSinglePost] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    if(id) {
      const currentPost = posts.find((post) => post.id === Number(id));
      setSinglePost([currentPost]);
    }    
  }, [posts, setSinglePost, id]);

  if (!singlePost) return <p>Loading...</p>

    return (
        <>
        <div className="posts-container">
            <PostList posts={singlePost}/>
        </div>
        </>
    )
}

export default PostContainerView;