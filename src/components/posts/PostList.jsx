import { useContext } from "react";
import PostListItem from "./PostListItem";
import { MyContext } from "../../App";
import CreatePost from "./CreatePost";


function PostList() {
  const context = useContext(MyContext);
  return (
    <ul>
      <CreatePost setPosts={context.setPosts} />
      
      {context.posts.map((post, index) => {
        const postUser = context.contacts.find(
          (person) => person.id == Number(post.contactId)
        );
        return (
          <PostListItem key={index} post={post} postUser={postUser || null} />
        );
      })}
    </ul>
  );
}

export default PostList;
