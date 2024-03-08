import PropTypes from "prop-types";
import { createContext, useState, useEffect } from "react";
import CommentList from "./CommentList";
import { Link, useNavigate } from "react-router-dom";

PostItem.propTypes = {
  post: PropTypes.object,
  postUser: PropTypes.object,
};

const CommentsContext = createContext()

export default function PostItem(props)  {

    const { post, postUser } = props

    const [ comments, setComments ] = useState([])

    const navigate = useNavigate();

    useEffect(() => {
      fetch(
        `https://boolean-api-server.fly.dev/svennas/post/${post.id}/comment`
      )
        .then((response) => response.json())
        .then((data) => setComments(data));
    }, [post.id]);

    if (!postUser || post.id === undefined) return <div></div>;

    const goToProfile = () => {
      navigate(`/view_profile/${postUser.id}`);
    };
  
    return (
      <div className="post_layout">
        <div className="post_header">
          <button
            className="post_circle"
            style={{ backgroundColor: postUser.favouriteColour }}
            onClick={goToProfile}
          >
            <p className="post_circle_text">
              {postUser.firstName.charAt(0)}
              {postUser.lastName.charAt(0)}
            </p>
          </button>
          <div className="title_name_container">
            <h3 className="post_name">
              {postUser.firstName} {postUser.lastName}
            </h3>
            <h3 className="post_title">
              <Link to={`/view_post/${post.id}`}>{post.title}</Link>
            </h3>
          </div>
        </div>

        <p className="post_content">{post.content}</p>

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