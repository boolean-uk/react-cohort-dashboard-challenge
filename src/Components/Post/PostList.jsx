import { useContext } from "react";

import { TempContext } from "./../../App";
import PostItem from "./PostItem";

function PostList() {
  const { postData } = useContext(TempContext);
  return (
    <div>
      <ul>
        {postData.map((post, index) => (
          <PostItem key={index} post={post} />
        ))}
      </ul>
    </div>
  );
}

export default PostList;
