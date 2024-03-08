import { useState, useContext, useEffect } from "react";
import PostItem from "./PostItem";
import { PostContext, UserContext } from "../../App";
import { useParams } from "react-router-dom";

export default function ShowPost() {
    const postContext = useContext(PostContext);  
    const userContext = useContext(UserContext);

    const { id } = useParams();

    const [post, setPost] = useState(null);

    console.log(id)

    useEffect(() => {
      setPost(postContext.posts.find((post) => Number(post.id) === Number(id)));
    }, [postContext.posts, id]);

    if (!post) return <div></div>;

    console.log("IN SHOW POST", post)

    return (
      <PostItem
        post={post}
        postUser={userContext.users.find((user) => user.id === post.contactId)}
      />
    );
}
