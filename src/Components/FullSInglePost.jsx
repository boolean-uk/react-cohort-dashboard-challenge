import { useContext } from "react";
import PostContext from "./PostContext";
import SinglePost from "./SinglePost";

function FullSinglePost() {
  const { focusPost, peopleData, loggedInUser } = useContext(PostContext);
  let author = peopleData[focusPost.contactId - 1];
  if (focusPost.contactId === 0) {
    author = loggedInUser;
  }

  return <SinglePost post={focusPost} author={author} />;
}

export default FullSinglePost;
