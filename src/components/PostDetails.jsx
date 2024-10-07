import { useContext, useEffect, useState } from "react";
import { Context } from "../App";
import { useParams } from "react-router-dom";
import "../style/PostItemCSS.css";

export default function PostDetails() {
  const { posts, users, comments } = useContext(Context);
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [userDetails, setUserDetails] = useState({});
  const [postComments, setPostComments] = useState([]);

  useEffect(() => {
    const post = posts.find(post => post.id == id);
    if (post) {
      setPost(post);

      const user = users.find(user => user.id == post.contactId);
      if (user) {
        const firstName = user.firstName;
        const lastName = user.lastName;
        const initials = `${firstName.charAt(0)}${lastName.charAt(0)}`;
        const profileColor = user.favouriteColour;
        setUserDetails({ firstName, lastName, initials, profileColor });
      }

      const commentsForPost = comments.filter(comment => comment.postId == id);
      setPostComments(commentsForPost);
    }
  }, [id, posts, users, comments]);

  const getUserDetails = (userId) => {
    const user = users.find(user => user.id === userId);
    if (user) {
      const firstName = user.firstName;
      const lastName = user.lastName;
      const initials = `${firstName.charAt(0)}${lastName.charAt(0)}`;
      const profileColor = user.favouriteColour;
      return { firstName, lastName, initials, profileColor };
    }
    return { firstName: "Unknown", lastName: "User", initials: "UU", profileColor: "#ccc" };
  };

  if (!post) {
    return <div>Loading...</div>;
  }

  console.log("post details comments " + postComments)

  return (
    <div className="post-details">
      <h1>Post Details</h1>
      <article className="post">
            <div className="profile-container">
              <div className="profile-image" style={{ backgroundColor: userDetails.profileColor }}>
                {userDetails.initials}
              </div>
              <h1>{userDetails.firstName} {userDetails.lastName}</h1>
            </div>
            <div>
            <p>
               {post.title}
              </p>
              <p>
                {post.content}
              </p>
              <ul className="comments">
                {postComments.map(comment => {
                  const commenterDetails = getUserDetails(comment.contactId);
                  return (
                    <li key={comment.id} className="comment">
                      <div className="comment-profile-container">
                        <div className="profile-image" style={{ backgroundColor: commenterDetails.profileColor }}>
                          {commenterDetails.initials}
                        </div>
                        <span>{commenterDetails.firstName} {commenterDetails.lastName}</span>
                      </div>
                      <p>{comment.content}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </article>
    </div>
  );
}
