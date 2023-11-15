import { useEffect, useState } from "react";
import PostContent from "./PostContent";
import Comments from "./Comments";

function SinglePost({
  post,
  root,
  loggedInUserColor,
  loggedInUserInitials,
  loggedInUser,
}) {
  const [author, setAuthor] = useState(null);

  const postId = post.contactId;

  useEffect(() => {
    fetch(`${root}/contact/${postId}`)
      .then((response) => response.json())
      .then((data) => setAuthor(data));
  }, [postId, root]);

  // console.log(author);
  if (!author) return <p>Loading...</p>;
  const user = author.firstName[0] + author.lastName[0];
  return (
    <div className="single-post">
      <PostContent
        author={author}
        post={post}
        user={user}
        loggedInUserColor={loggedInUserColor}
      ></PostContent>
      <Comments
        loggedInUserInitials={loggedInUserInitials}
        root={root}
        post={post}
        loggedInUser={loggedInUser}
      ></Comments>
    </div>
  );
}
export default SinglePost;
