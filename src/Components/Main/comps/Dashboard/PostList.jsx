import { useContext } from "react";
import { MyContext } from "../../../../App.jsx";
import PostItem from "./PostItem.jsx";
export default function PostList() {
  const { posts, users } = useContext(MyContext);

  return (
    <>
      {posts.map((post, index) => {
        const postUser = users.find(
          (useritem) => Number(useritem.id) === Number(post.contactId)
        );
        return <PostItem post={post} key={index} postUser={postUser} />;
      })}
    </>
  );
}
