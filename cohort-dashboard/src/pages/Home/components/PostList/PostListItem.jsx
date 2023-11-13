import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProfileIcon from "../ProfileIcon";
import PostCommentSection from "../PostComments/PostCommentSection";
import DeletePostBtn from "./DeletePostBtn";

export default function PostListItem(props) {
  const [contact, setContact] = useState(null);
  const { post, setRefresh } = props;

  const fetchContact = () => {
    fetch(
      `https://boolean-api-server.fly.dev/yee0802/contact/${post.contactId}`
    )
      .then((res) => res.json())
      .then((data) => setContact(data));
  };

  useEffect(fetchContact, []);

  if (contact) {
    return (
      <li id="post">
        <div className="post-header">
          <div className="icon-title-container">
            <ProfileIcon contact={contact} />
            <div className="post-header__author-title">
              <h3>
                {contact ? (
                  <Link
                    className="profile-link"
                    to={`/${post.contactId}/profile`}
                  >
                    {`${contact.firstName} ${contact.lastName}`}
                  </Link>
                ) : (
                  "Loading..."
                )}
              </h3>
              <Link to={`/${post.id}/post`} className="post-link">
                {post.title}
              </Link>
            </div>
          </div>
          <DeletePostBtn setRefresh={setRefresh} id={post.id} />
        </div>

        <div className="post-content">
          <p>{post.content}</p>
        </div>

        <PostCommentSection post={post} />
      </li>
    );
  }
}
