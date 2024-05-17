import { CommentsContext, PostsContext, UsersContext } from "../../../App";
import sendBtn from "../../../assets/svg/sendBtn.svg";
import { useContext, useState } from "react";

export default function CommentForm({ post}) {
  const {users} = useContext(UsersContext)
  const [commentForm, setCommentForm] = useState({
    content: "",
  });

  const loggedInUser = users.find((user) => user.id)

  const handleChange = (e) => {
    const { value } = e.target;

    setCommentForm({
      content: value,
      postId: post.id,
      contactId: loggedInUser.id
    });
  };

  const updateAPI = (e) => {
    e.preventDefault();

    fetch(`https://boolean-uk-api-server.fly.dev/tzoltie/post/${post.id}/comment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(commentForm)
    })
      .then(response => response.json())
      .then(json => setComments([...comments, json]))

    setCommentForm({
      content: ''
    })
  };

  return (
    <>
    {loggedInUser && 
      <form className="comment-section-form" onSubmit={(e) => updateAPI(e)}>
      {loggedInUser && 
      <div className="profile-initials" style={{backgroundColor: loggedInUser.favouriteColour}}>
        <p className="initials">
          {loggedInUser.firstName[0]}
          {loggedInUser.lastName[0]}
        </p>
      </div>}
      <div className="text-input-container">
        <input
          type="text"
          name="commentContent"
          placeholder="Add a comment..."
          value={commentForm.content}
          onChange={(e) => handleChange(e)}
        />
        <button className="submit">
          <img src={sendBtn} className="icon" id="send" />
        </button>
      </div>
    </form>
  }
    </>
    )
}
