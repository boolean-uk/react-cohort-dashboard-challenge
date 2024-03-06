import { useContext } from "react";
import { PostContext } from "../../App";
import PostItem from "./PostItem";

export default function PostList() {
    const postContext = useContext(PostContext);

    console.log(postContext.users)

    const getUser = (post) => {
        console.log("IN get user")
        const postUser = postContext.users.find((user) => user.id === post.contactId)
        return postUser
    }


    

    return (
      <>
        {[...postContext.posts].reverse().map((post, index) => (
          <PostItem post={post} key={index} postUser={getUser(post)} />
        ))}
      </>
    );
}
