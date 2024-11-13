import { useContext, useEffect, useState } from "react";
import ProfileCircle from "../profile-circle/ProfileCircle";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";

function PostItem({ post }) {
  // Get firstname, lastname and initals from contactId
  const [contact, setContact] = useState({});
  const { loggedInUser } = useContext(AppContext);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const getContact = async () => {
    const res = await fetch(
      `https://boolean-uk-api-server.fly.dev/shyye/contact/${post.contactId}`
    );

    const data = await res.json();

    const contactObject = {
      firstname: data.firstName,
      lastname: data.lastName,
      initials: data.firstName[0] + data.lastName[0],
    };
    setContact(contactObject);
  };

  // Get comments for this post
  const getComments = async () => {
    const res = await fetch(
      `https://boolean-uk-api-server.fly.dev/shyye/post/${post.id}/comment`
    );
    const data = await res.json();

    // For each comment in data, add firstname, lastname and initials
    for (let i = 0; i < data.length; i++) {
      const res = await fetch(
        `https://boolean-uk-api-server.fly.dev/shyye/contact/${data[i].contactId}`
      );
      const contactData = await res.json();

      const contactObject = {
        firstname: contactData.firstName,
        lastname: contactData.lastName,
        initials: contactData.firstName[0] + contactData.lastName[0],
      };
      data[i].contact = contactObject;
    }
    setComments(data);
  };

  // Submit comment
  const submitComment = async (commentData) => {
    commentData.preventDefault();
    const commentDataObject = {
      postId: post.id,
      content: newComment,
      contactId: loggedInUser.contactId,
    };

    commentDataObject.contact = {
      firstname: loggedInUser.firstname,
      lastname: loggedInUser.lastname,
      initials: loggedInUser.initials,
    };

    const res = await fetch(
      `https://boolean-uk-api-server.fly.dev/shyye/post/${post.id}/comment`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(commentDataObject),
      }
    );
    const data = await res.json();
    setComments([...comments, data]);
  };

  // Load data
  useEffect(() => {
    getComments();
    getContact();
  }, []);

  return (
    <div className="post-card-container">
      <div className="post-header-wrapper">
        <ProfileCircle userInitals={contact.initials} />
        <div>
          <h4>
            {contact.firstname} {contact.lastname}
          </h4>
          <Link to={`/post/${post.id}`}>
            <p>{post.title}</p>
          </Link>
        </div>
      </div>
      <div>
        <p>{post.content}</p>
      </div>
      <div>
        {comments.map((comment) => (
          <div key={comment.id} className="post-comment-wrapper">
            <ProfileCircle userInitals={comment.contact.initials} />
            <div className="post-comment">
              <strong>
                {comment.contact.firstname} {comment.contact.lastname}
              </strong>
              <br />
              {comment.content}
            </div>
          </div>
        ))}
      </div>
      <div>
        <form onSubmit={submitComment}>
          <input
            type="text"
            id="comment"
            name="comment"
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="What's on your mind?"
            value={newComment}
          />
          <button type="submit" className="post-button ">
            Comment
          </button>
        </form>
      </div>
    </div>
  );
}

export default PostItem;
