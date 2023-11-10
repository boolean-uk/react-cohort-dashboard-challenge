import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProfileIcon from "../ProfileIcon";
import PostCommentSection from "../PostComments/PostCommentSection";

export default function PostListItem({ post }) {
  const [contact, setContact] = useState({});

  const fetchContact = () => {
    fetch(
      `https://boolean-api-server.fly.dev/yee0802/contact/${post.contactId}`
    )
      .then((res) => res.json())
      .then((data) => setContact(data));
  };

  useEffect(fetchContact, []);

  return (
    <li id="post">
      <div className="post-header">
        <ProfileIcon contact={contact} />
        <div className="post-header__author-title">
          <h3>
            {contact.id
              ? `${contact.firstName} ${contact.lastName}`
              : "Loading..."}
          </h3>
          <Link to={`/${post.id}/post`} className="post-link">
            {post.title}
          </Link>
        </div>
      </div>

      <div className="post-content">
        <p>{post.content}</p>
      </div>

      <PostCommentSection post={post} />
    </li>
  );
}
