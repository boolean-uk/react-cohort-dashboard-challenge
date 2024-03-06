import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Comment from "./Comment";
import CreateComment from "./CreateComment";
import { useParams, Link } from "react-router-dom";

export default function Post({ post, contacts, findPost }) {
  const [user, setUser] = useState("");
  const [comments, setComments] = useState([]);

  const { id } = useParams(); // id of THE POST

  // console.log("id: ", id);

  useEffect(() => {
    if (id !== undefined) {
      // we have a post id
      fetch(
        `https://boolean-api-server.fly.dev/ssuihko/contact/${post.contactId}`
      )
        .then((response) => response.json())
        .then((data) => {
          // console.log("data: ", data);
          setUser(data);
        });

      fetch(
        `https://boolean-api-server.fly.dev/ssuihko/post/${post.id}/comment`
      )
        .then((response) => response.json())
        .then((data) => {
          setComments(data);
        });
    } else {
      // console.log("id was null so here!");
      const thisUser = contacts.find((x) => parseInt(x.id) === post.contactId);
      // console.log(thisUser);
      setUser(thisUser);
    }
  }, [id, post, contacts]);

  useEffect(() => {
    if (comments.length > 0) {
      if (post.id !== comments[0].postId) {
        fetch(
          `https://boolean-api-server.fly.dev/ssuihko/post/${post.id}/comment`
        )
          .then((response) => response.json())
          .then((data) => {
            setComments(data);
          });
      }
    }
  }, [comments, post]);

  // call contact data by post.contactId
  useState(() => {
    // console.log("in useState");
    if (id === undefined) {
      // console.log("id is undefined!");
      fetch(
        `https://boolean-api-server.fly.dev/ssuihko/contact/${post.contactId}`
      )
        .then((response) => response.json())
        .then((data) => {
          // console.log("contact data: ", data);
          setUser(data);
        });
    }
  }, [id]);

  // call data
  useState(() => {
    fetch(`https://boolean-api-server.fly.dev/ssuihko/post/${post.id}/comment`)
      .then((response) => response.json())
      .then((data) => {
        // console.log("comments data: ", data);
        setComments(data);
      });
  }, [id]);

  //console.log("---------------");
  // console.log("current contact: ", user);
  // console.log("typeof current contact: ", typeof user);
  //console.log("current post: ", post);
  //console.log("comments match?: ", comments);
  //console.log("-----------------");

  // console.log("current contact: ", user, typeof user);

  return (
    <article className="post-content">
      {user === undefined || user === "" ? (
        <p>loading...</p>
      ) : (
        <div>
          <div className="yellow">
            <div className="profile-icon-contact">
              <div id="profile-icon-id-contact">
                {user.firstName.charAt(0) + "" + user.lastName.charAt(0)}
              </div>
            </div>
            <h4>{user.firstName + " " + user.lastName} </h4>
            <div className="post-article">
              <h5
                onClick={(e) => {
                  e.preventDefault();
                  findPost(post.id);
                }}
              >
                <Link to={`/post/${post.id}`} className="post-title">
                  {post.title}
                </Link>
              </h5>
              <p>{post.content}</p>
            </div>
          </div>
          <div>
            {comments
              .sort((a, b) => parseInt(b.postId) - parseInt(a.postId))
              .map((comment, index) => (
                <Comment comment={comment} contacts={contacts} key={index} />
              ))}
          </div>
          <CreateComment
            comments={comments}
            setComments={setComments}
            post={post}
          />
        </div>
      )}
    </article>
  );
}

Post.propTypes = {
  post: PropTypes.object,
  contacts: PropTypes.array,
  findPost: PropTypes.func,
};
