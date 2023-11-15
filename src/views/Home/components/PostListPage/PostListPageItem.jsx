import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProfileIcon from "../ProfileIcon";
import SubmitCommentSection from "../SubmitComments/SubmitCommentSection";

export default function PostListPageItem({ post, API_BASE_URL }) {
  const [contactPerson, setContactPerson] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          `${API_BASE_URL}/Hayor4real/contact/${post.contactId}`
        );
        const data = await response.json();
        setContactPerson(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [API_BASE_URL, post.contactId]);

  if (contactPerson) {
    return (
      <li id="post">
        <div className="post__header">
          <ProfileIcon contactPerson={contactPerson} />
          <div className="post__header__author__title">
            <h3>{`${contactPerson.firstName} ${contactPerson.lastName}`}</h3>
            <Link to={`/${post.id}/post`} className="post__title__link">
              {post.title}
            </Link>
          </div>
        </div>

        <div className="post__content">
          <p>{post.content}</p>
        </div>

        <SubmitCommentSection post={post} API_BASE_URL={API_BASE_URL} />
      </li>
    );
  }

  return null; // Render nothing if contactPerson is still loading
}
