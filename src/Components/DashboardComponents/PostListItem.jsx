import React from "react";
import { ContactContext } from "../../App";
import { useContext } from "react";
import ProfilePicture from "../ProfileComponents/ProfilePicture";
import CommentSection from "./CommentSection";
import { Link } from "react-router-dom";

function PostListItem({ post, index }) {
  const { id, contactId, title, content } = post;
  const contactList = useContext(ContactContext);

  let author = contactList.contacts.filter(
    (contact) => Number(contact.id) === Number(contactId)
  );

  function log() {
    console.log(author[0].firstName);
  }

  const firstName = author[0]?.firstName;
  const lastName = author[0]?.lastName;

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
        <div className="post-comment-container">
        <li key={index} className="post-list-items">
          <ProfilePicture firstName={firstName} lastName={lastName} favouriteColour={generateRandomColor()}/>
          <p>
            {firstName} {lastName}
          </p>
          {/* <p>{title}</p> */}
          <Link to={`/posts/${id}`}>{title}</Link>
          <p>{content}</p>
        </li>
        <hr />
        <CommentSection id={id} />
        </div>

    </>
  );
}

export default PostListItem;
