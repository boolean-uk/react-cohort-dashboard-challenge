/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CustomProfileIcon from "../../components/Customprofileicon";
import CommentSection from "../Comments/Commentsection.jsx";

export default function Postpagelistitem({ post, API_BASE_URL }) {
  const [contactPerson, setContactPerson] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      // eslint-disable-next-line react/prop-types
      const response = await fetch(
        `${API_BASE_URL}/Elizabethcodes44/contact/${post.contactId}`
      );
      const data = await response.json();
      setContactPerson(data);
    };

    fetchUserData();
  }, [API_BASE_URL, post.contactId]);

  if (contactPerson) {
    return (
      <li id="entry">
        <div className="entryheader">
          <CustomProfileIcon contactPerson={contactPerson} />
          <div className="entryheaderauthortitle">
            <h3>{`${contactPerson.firstName} ${contactPerson.lastName}`}</h3>
            <Link to={`/${post.id}/post`} className="entrytitlelink">
              {post.title}
            </Link>
          </div>
        </div>

        <div className="entry">
          <p>{post.content}</p>
        </div>

        <CommentSection post={post} API_BASE_URL={API_BASE_URL} />
      </li>
    );
  }

  return null;
}
