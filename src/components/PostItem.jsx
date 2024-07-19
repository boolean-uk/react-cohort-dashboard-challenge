import { useState, useEffect, createContext, useContext } from "react";
import { Link } from "react-router-dom";
import AddComment from "./AddComment";
import CommentList from "./CommentList";
import UserIcon from "./UserIcon";
import { appContext } from "../App";

export const commentContext = createContext();

export default function PostItem({ post }) {
  const { allPosts, setAllPosts, loggedInUser, users } = useContext(appContext);
  const [comments, setComments] = useState([]);
  const [userInfo, setUserInfo] = useState(null)
  const [seePrevious, setSeePrevious] = useState(false);
  const [LinkText, setLinkText] = useState("Show Previous Comments");

  useEffect(() => {
    fetch(
      `https://boolean-uk-api-server.fly.dev/zainabch123/post/${post.id}/comment`
    )
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, [post.id]);

  const sortedComments = comments.sort((a, b) => (a.id > b.id ? -1 : 1));

  useEffect(() => {
    fetch(
      `https://boolean-uk-api-server.fly.dev/zainabch123/contact/${post.contactId}`
    )
      .then((res) => res.json())
      .then((data) => setUserInfo(data));
  }, [post.contactId]);

  console.log("sorted comments", sortedComments);

  const commentsToDisplay = sortedComments.slice(0, 3);

  console.log("comments to display", commentsToDisplay);

  function handleChange(event) {
    setSeePrevious(!seePrevious)

    setLinkText(LinkText === "Show Previous Comments" ? "Hide Previous Comments" : "Show Previous Comments")
  }

  console.log("see Previous Comments", seePrevious)

  return (
    <commentContext.Provider
      value={{ sortedComments, comments, setComments, commentsToDisplay, seePrevious }}
    >
      {userInfo && (
        <li className="post">
          <div className="post-user">
            <UserIcon userInfo={userInfo} />
            <div className="user-info">
              <h2>
                <Link to={`/post/${post.id}`}>
                  {userInfo.firstName} {userInfo.lastName}
                </Link>
              </h2>
              <h3>
                {" "}
                <Link to={`/post/${post.id}`}>{post.title}</Link>
              </h3>
            </div>
          </div>
          <div className="post-content">{post.content}</div>

          {sortedComments.length > 3 && (
            <Link className="previous-comments" onClick={handleChange}>{LinkText}</Link>
          )}
          <CommentList />

          <AddComment post={post} />
        </li>
      )}
    </commentContext.Provider>
  );
}
