import SinglePost from "./SinglePost";
import PostContext from "./PostContext";
import { useContext } from "react";

function Posts() {
  const { postData, peopleData, loggedInUser } = useContext(PostContext);

  return (
    <ul id="posts-display">
      {postData.map((post, index) => {
        let author = {};
        if (post.contactId === 0) {
          author = {
            firstName: loggedInUser.firstName,
            lastName: loggedInUser.lastName,
          };
        } else {
          author = peopleData[post.contactId - 1];
        }
        return <SinglePost key={index} post={post} author={author} />;
      })}
    </ul>
  );
}

export default Posts;
