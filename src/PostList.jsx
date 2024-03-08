import { useContext } from "react";
import PostListItem from "./PostListItem";
import { ContactContext, PostContext } from "./App";

function PostList() {
  const postContext = useContext(PostContext);
  const contectContext = useContext(ContactContext);
  const { posts } = postContext;
  const { contacts } = contectContext;
  return (
    <>
      {[...posts].reverse().map((post, index) => {
        const user = contacts.find((c) => c.id === post.contactId);
        return <PostListItem key={index} post={post} user={user} />;
      })}
    </>
  );
}
export default PostList;
