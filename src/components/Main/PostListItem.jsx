import { useEffect, useState } from "react";
import ProfileIcon from "../../components/Header/ProfileIcon";

// eslint-disable-next-line react/prop-types
export default function PostListItem({post}) {
  const [contact, setContact] = useState(null);
  

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
            <div>
              <h3>{`${contact.firstName} ${contact.lastName}`}</h3>
            </div>
          </div>
        </div>
        <div className="post-content">
          <p>{post.content}</p>
        </div>
      </li>
    );
  }
}
