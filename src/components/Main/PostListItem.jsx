import { useEffect, useState } from "react";
import ProfileIcon from "../../components/Header/ProfileIcon";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function PostListItem({post}) {
  const [contact, setContact] = useState(null);
  

  const fetchContact = () => {
    fetch(
      `https://boolean-api-server.fly.dev/PCapid3v/contact/${post.id}`
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
            <div>
              <h3>{`${contact.firstName} ${contact.lastName}`}</h3>
            </div>
          </div>
        </div>
        <div className="post-content">
          <Link to={`/posts/${post.id}`}><span>{post.title}</span></Link>
        </div>
        <div className="post-content">
          <p>{post.content}</p>
        </div>
      </li>
    );
  }
}
