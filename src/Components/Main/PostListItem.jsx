import { useEffect, useState } from "react";
import ProfileIcon from "../../Components/Header/ProfileIcon";
import { Link } from "react-router-dom";

export default function PostListItem({post}) {
  const [contact, setContact] = useState(null);

// I've added error handling to check for HTTP errors during the fetch because it has an error with 404 starting from Id 9


  const fetchContact = () => {
    fetch(`https://boolean-api-server.fly.dev/loza01/contact/${post.contactId}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => setContact(data))
      .catch((error) => console.error("Error fetching contact:", error));
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
          <Link to={`/posts/${post.id} `} state={{post}} ><span>{post.title}</span></Link>
        </div>
        <div className="post-content">
          <p>{post.content}</p>
        </div>
      </li>
    );
  }
}
