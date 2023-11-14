import { useEffect, useState } from "react";
import PostContent from "./PostContent";
import Comments from "./Comments";

export default function SinglePost({ post, root }) {
  const [authur, setAuthur] = useState("");

  const id = post.contactId;
  useEffect(() => {
    fetch(`${root}/contact/${id}`)
      .then((response) => response.json())
      .then((data) => setAuthur(data));
  }, [id, root]);

  // console.log(authur);
  return (
    <div className="single-post">
      <PostContent authur={authur} post={post}></PostContent>
      <Comments></Comments>
    </div>
  );
}
