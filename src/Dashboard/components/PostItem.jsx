import PropTypes from "prop-types";
import { createContext, useState, useEffect } from "react";
import CommentList from "./CommentList";
import { Link } from "react-router-dom";

PostItem.propTypes = {
  post: PropTypes.object,
  postUser: PropTypes.object,
};

const CommentsContext = createContext()

export default function PostItem(props)  {

    const { post, postUser } = props

    const [ comments, setComments ] = useState([])

    useEffect(() => {
      fetch(
        `https://boolean-api-server.fly.dev/svennas/post/${post.id}/comment`
      )
        .then((response) => response.json())
        .then((data) => setComments(data));
    }, [post.id]);

    if (!postUser) return <div></div>

    console.log("CUrrent comments", comments)
  
    return (
      <div className="post_layout">
        <div className="post_header">
          <div className="post_circle">
            <p className="post_circle_text">
              {postUser.firstName.charAt(0)}
              {postUser.lastName.charAt(0)}
            </p>
          </div>
          <h2 className="post_name">
            {postUser.firstName} {postUser.lastName}
          </h2>
          <p></p>
          <h3 className="post_title">
            <Link to={`/view_post/${post.id}`}>{post.title}</Link>
          </h3>
        </div>

        <p className="normal_text">{post.content}</p>

        <hr className="post_dividers" />

        <CommentsContext.Provider
          value={{
            post: post,
            comments: comments,
            setComments: setComments,
          }}
        >
          <CommentList />
        </CommentsContext.Provider>
      </div>
    );
}

export { CommentsContext }