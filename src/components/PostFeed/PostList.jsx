import {Post} from "./Post";
import { useContext } from "react";
import { MyContext } from "../../ApiProvider";
function PostList() {
  const { postsWithContacts } = useContext(MyContext);

  return (
    <ul>
      {postsWithContacts
        .slice()
        .reverse()
        .map((post, index) => (
          <Post key={index} post={post} />
        ))}
    </ul>
  );
}

export default PostList;
