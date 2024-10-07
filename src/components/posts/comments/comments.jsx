import { useEffect, useState } from "react";
import Comment from "./comment";
import ProfileIcon from "../../profileIcon/ProfileIcon";
import InputField from "../../inputFields/InputFields";
import { Button } from "@mui/material";

export default function Comments({ postId, currentUser }) {
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState("");
  const [filteredComments, setFilteredComments] = useState([]);
  const [checkFilter, setCheckFilter] = useState(false);

  const filterComment = () => {
    if (checkFilter) {
      if (comments.length > 3) {
        setFilteredComments(
          comments.slice(comments.length - 3, comments.length)
        );
        setCheckFilter(!checkFilter);
      }
    } else {
      setFilteredComments([...comments]);
      setCheckFilter(!checkFilter);
    }
  };

  useEffect(() => {
    fetch(
      `https://boolean-uk-api-server.fly.dev/valen98/post/${postId}/comment`
    )
      .then((res) => res.json())
      .then((data) => {
        setComments(data);
        if (data.length > 3) {
          setFilteredComments(data.slice(data.length - 3, data.length));
        } else {
          setFilteredComments(data);
        }
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newComment = {
      postId: parseInt(postId),
      content: commentInput,
      contactId: currentUser.contactId,
    };

    setCommentInput("")

    await fetch(
      `https://boolean-uk-api-server.fly.dev/valen98/post/${postId}/comment`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newComment),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setComments([...comments, data]);
        setFilteredComments([...comments, data]);
      });
  };
  return (
    <div className="commentsBody">
      <div className="commentHeader">
        {comments.length > 3 ? (
          <div>
            <Button onClick={filterComment}>
              <p>Show previous comments</p>
            </Button>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="comments">
        {filteredComments.length > 0 ? (
          filteredComments.map((comment) => (
            <Comment
              key={comment.id}
              comment={comment}
              setComments={setComments}
            />
          ))
        ) : (
          <div className="noComments">
            <p>No comments yet</p>
          </div>
        )}
        <div className="showMoreButton"></div>
      </div>
      <div className="addCommentSection">
        <div className="commentProfileIcon">
          <ProfileIcon
            letters={
              currentUser.firstName.charAt(0) + currentUser.lastName.charAt(0)
            }
            setFavouriteColour={currentUser.favouriteColour}
          />
        </div>
        <InputField
          label={"Add a comment"}
          name={"addComment"}
          placeholder={"Add a comment"}
          id={"addComment"}
          type={"text"}
          onChange={(e) => setCommentInput(e.target.value)}
        />
        <Button
          className="createButton"
          variant="contained"
          onClick={handleSubmit}
        >
          Comment
        </Button>
      </div>
    </div>
  );
}
