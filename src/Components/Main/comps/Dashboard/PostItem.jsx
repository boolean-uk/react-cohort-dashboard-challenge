import { useState, useEffect } from "react";
import { useContext } from "react";
import { MyContext } from "../../../../App.jsx";
import { Link, useParams } from "react-router-dom";
import CommentItem from "./CommentItem.jsx";
import CreateComment from "./CreateComment.jsx";

export default function PostItem(props) {
  const [comments, setComments] = useState([]);
  const { users } = useContext(MyContext);
  //Update states
  const [canUpdate, setCanUpdate] = useState(false);
  const [currentlyUpdating, setCurrentlyUpdating] = useState(false);
  const [newContent, setNewContent] = useState("");
  const [updatePost, setUpdatePost] = useState({});
  const { id } = useParams();

  //Set a limit to visible comments to be 3
  const [visibleComments, setVisibleComments] = useState(3);

  //Fetch comments
  useEffect(() => {
    fetch(
      `https://boolean-api-server.fly.dev/knutsr0501/post/${props.post.id}/comment`
    )
      .then((response) => response.json())
      .then((item) => setComments(item));
  }, [props.post]);

  const handleShowMore = (event) => {
    setVisibleComments(visibleComments + 2);
  };
  const handleShowLess = (event) => {
    setVisibleComments(visibleComments - 2);
  };
  const indexFirst = props.postUser.firstName[0];
  const indexLast = props.postUser.lastName[0];

  //Useeffect for able to update (and delete)
  useEffect(() => {
    if (Number(id) === Number(props.post.contactId)) {
      setCanUpdate(true);
    } else if (Number(id) !== Number(props.post.contactId)) {
      setCanUpdate(false);
    }
  }, []);

  //Set the updatepost to this post
  useEffect(() => {
    setUpdatePost(props.post);
  }, []);
  console.log(updatePost);

  const handleDelete = (event) => {
    //currently doesnt update the page after deletion
    fetch(
      `https://boolean-api-server.fly.dev/knutsr0501/post/${props.post.id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };
  const handleUpdate = (event) => {
    setCurrentlyUpdating(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updatePost.content = newContent;

    fetch(
      `https://boolean-api-server.fly.dev/knutsr0501/post/${Number(
        updatePost.id
      )}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatePost),
      }
    );
  };

  return (
    <div className="post-div" key={props.post.id}>
      <div className="container-img-h2">
        <Link to={`/profile/${props.postUser.id}`}>
          <div
            className="profile-icon-div"
            style={{
              backgroundColor: props.postUser.favouriteColour,
            }}
          >
            {indexFirst} {indexLast}
          </div>
        </Link>
        <h2>
          <Link to={`/profile/${props.postUser.id}`}>
            {props.postUser.firstName} {props.postUser.lastName}
          </Link>
        </h2>
        {canUpdate && (
          <div>
            <button onClick={handleUpdate}>Update</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        )}
      </div>
      <div>
        <Link to={`/post/${props.post.id}`}>
          <h3>{props.post.title}</h3>
        </Link>
        {currentlyUpdating ? (
          <div className="create-post">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                id="postComment"
                name="postComment"
                onChange={(e) => setNewContent(e.target.value)}
                value={newContent}
              />
              <input type="submit" value="Update" />
            </form>
          </div>
        ) : (
          <p>{props.post.content}</p>
        )}
      </div>

      <div className="comments-div">
        {visibleComments < comments.length && (
          //If visibleComments counter is less than amount of comments, give option to show more comments
          <p className="expand-comments" onClick={handleShowMore}>
            Show more comments
          </p>
        )}
        {visibleComments >= 4 && (
          <p className="decrease-comments" onClick={handleShowLess}>
            Show less comments
          </p>
        )}
        <ul>
          {comments
            .slice(Math.max(comments.length - visibleComments, 0))
            .map((comment, index) => {
              //Sliced the map to only show up to visibleComment counter

              const commentUser = users.find(
                (useritem) => Number(useritem.id) === Number(comment.contactId)
              );
              return (
                <CommentItem
                  comment={comment}
                  key={index}
                  commentUser={commentUser}
                  post={props.post}
                />
              );
            })}
        </ul>
      </div>
      <CreateComment
        post={props.post}
        comments={comments}
        setComments={setComments}
      />
    </div>
  );
}
