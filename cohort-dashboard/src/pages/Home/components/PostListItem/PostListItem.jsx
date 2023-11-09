import { useEffect, useState } from "react";
import ProfileIcon from "../../../../components/ProfileIcon";

export default function PostListItem({ post }) {
  const [contact, setContact] = useState([]);

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
          <h3>{`${contact.firstName} ${contact.lastName}`}</h3>
          <span>{post.title}</span>
        </div>
      </div>

      <div className="post-content">
        <p>{post.content}</p>
      </div>
    </li>
  );
}
