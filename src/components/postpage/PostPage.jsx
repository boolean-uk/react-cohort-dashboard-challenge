import { useParams, useLocation } from "react-router-dom";
import Header from "../header/header";
import InitialsButton from "../buttons/initialsButton";

export const PostPage = ({ currentUser }) => {
  const location = useLocation();
  const { post, comments, contacts } = location.state || {};
  const { id } = useParams();
  console.log(contacts);
  console.log("post", post);
  console.log("allcomments:", comments);
  console.log("comment", comments[id]);

  return (
    <div className="postPage">
      <Header currentUser={currentUser} />
      <div>
        <h1>{post.title}</h1>
      </div>
      <div>
        <h3>{post.content}</h3>
      </div>

      <ul className="ulComments">
        {comments[id].map((comment, index) => {
          return (
            <li style={{ listStyle: "none" }} key={index}>
              <InitialsButton currentUser={currentUser}/>
              <div>
                <p>{comment.content}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  );
};
