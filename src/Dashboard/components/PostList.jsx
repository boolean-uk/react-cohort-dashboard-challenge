import { useContext } from "react";
import { PostContext, UserContext } from "../../App";
import PostItem from "./PostItem";

export default function PostList() {
    const postContext = useContext(PostContext);
    const userContext = useContext(UserContext);

    return (
      <>
        {[...postContext.posts].reverse().map((post, index) => (
          <PostItem
            post={post}
            key={index}
            postUser={userContext.users.find(
              (user) => user.id === post.contactId
            )}
          />
        ))}
      </>
    );
}
