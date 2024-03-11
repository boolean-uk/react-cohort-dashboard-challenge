import React from "react";
import ProfilePicture from "../ProfileComponents/ProfilePicture";
import { useEffect, useState, useContext } from "react";
import { ContactContext, UserContext } from "../../App";
import { Link } from "react-router-dom";

function CommentSection({ id }) {
  const contacts = useContext(ContactContext);
  const { user } = useContext(UserContext);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState({
    postId: id,
    content: "",
    contactId: 69
  });

  

  const [showAllComments, setShowAllComments] = useState(false);

  useEffect(() => {
    fetch(
      `https://boolean-api-server.fly.dev/SebastianEngan/post/${id}/comment`
    )
      .then((res) => res.json())
      .then((commentData) => setComments(commentData));
  }, [id]);

  //TODO: store contactID global somehow and then get it from a state or context
  useEffect(() => {
    fetch(
      `https://boolean-api-server.fly.dev/SebastianEngan/post/${id}/comment`
    )
      .then((res) => res.json())
      .then((commentData) => setComments(commentData));
  }, []);

  //   useEffect(() => {
  //     console.log("list", comments);
  //   }, [comments]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setComment({ ...comment, [name]: value });
    console.log(value);
  };

  const postComment = (e) => {
    e.preventDefault();
    const newComment = { ...comment };
    setComments([...comments, newComment]);
    setComment({
      postId: id,
      content: "",
      contactId: 69,
    });
  };

  function getFirstname(contactId) {
    let author = contacts.contacts.filter(
      (contact) => Number(contact.id) === Number(contactId)
    );
    const firstName = author[0]?.firstName;

    return firstName;
  }

  function getLastname(contactId) {
    let author = contacts.contacts.filter(
      (contact) => Number(contact.id) === Number(contactId)
    );
    const lastName = author[0]?.lastName;

    return lastName;
  }

  const toggleShowAllComments = () => {
    setShowAllComments(!showAllComments);
  };

  function generateRandomColor() {
    // Generate random values for red, green, and blue components
    const red = Math.floor(Math.random() * 256); // Random integer between 0 and 255
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
  
    // Convert the RGB values to hexadecimal format
    const redHex = red.toString(16).padStart(2, '0'); // Convert to hexadecimal and pad with 0 if necessary
    const greenHex = green.toString(16).padStart(2, '0');
    const blueHex = blue.toString(16).padStart(2, '0');
  
    // Concatenate the hexadecimal values to form the color code
    const colorCode = `#${redHex}${greenHex}${blueHex}`;
  
    return colorCode;
  }

  return (
    <>
      <div className="comment-box">
        <button onClick={toggleShowAllComments}>
          {showAllComments ? "Hide comments" : "See previous comments"}
        </button>
        <div className="comment-list">
          <ul>
            {comments
              .slice(0, showAllComments ? comments.length : 3)
              .map((comment, index) => (
                <li key={index} className="comment-list-items">
                  <ProfilePicture
                    firstName={getFirstname(comment.contactId)}
                    lastName={getLastname(comment.contactId)}
                    favouriteColour={generateRandomColor()}
                  />
                  <p>{comment.content}</p>
                </li>
              ))}
          </ul>
        </div>
        <form onSubmit={postComment}>
          <div className="post-box-textarea-section">
            <Link to="/profile">
              <ProfilePicture
                firstName={user.firstName}
                lastName={user.lastName}
                favouriteColour={"green"}
              />
            </Link>
            <textarea
              type="text"
              name="content"
              placeholder="Add a comment..."
              value={comment.content}
              onChange={handleChange}
            ></textarea>
            <button>post</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default CommentSection;
