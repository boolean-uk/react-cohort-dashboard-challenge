// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const API_BASE_URL = 'https://boolean-api-server.fly.dev/SukunimiVinod1';

export default function Posts() {
  const { postId } = useParams();
  console.log(postId)
  const [post, setPost] = useState(null);
  const [contact, setContact] = useState(null);
  const [comments, setComments] = useState([]);
  const [commenters, setCommenters] = useState({});
  const [isCommentsLoaded, setIsCommentsLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postResponse = await fetch(`${API_BASE_URL}/post/${postId}`);
        const postData = await postResponse.json();
        setPost(postData);

        const contactResponse = await fetch(`${API_BASE_URL}/contact/${postData.contactId}`);
        const contactData = await contactResponse.json();
        setContact(contactData);

        const commentsResponse = await fetch(`${API_BASE_URL}/post/${postId}/comment`);
        const commentsData = await commentsResponse.json();
        setComments(commentsData);

        setIsCommentsLoaded(true);

        const commentersResponses = await Promise.all(
          commentsData.map((comment) => fetch(`${API_BASE_URL}/contact/${comment.contactId}`))
        );
        const commentersData = await Promise.all(commentersResponses.map((res) => res.json()));

        const commentersMap = commentersData.reduce((map, commenter) => {
          map[commenter.id] = commenter;
          return map;
        }, {});
        setCommenters(commentersMap);
      } catch (error) {
        console.error('Error', error);
        setIsCommentsLoaded(true);
      }
    };

    fetchData();
  }, [postId]);

  if (!post || !contact || !isCommentsLoaded) {
    return <div>Loading...</div>;
  }

  const initials = `${contact.firstName[0]}${contact.lastName[0]}`;

  return (
    <div className="main-content">
      <div className="each-post">
        <ul className="comment-ul">
          <li className="comment-li">
            <div className="title-container">
              <div className="initials">{initials}</div>
              <div className="comment-title">
                {`${contact.firstName} ${contact.lastName}`}
              </div>
            </div>
            <Link to={`/comments/${post.id}`}>
              <div className="comment-link">{post.title}</div>
            </Link>
            <div className="main-comment">{post.content}</div>
            <hr className="hr"></hr>
            <div className="form">
              <div className="comments">
                {comments.map((comment, index) => {
                  const commenter = commenters[comment.contactId];
                  const commenterInitials = commenter
                    ? `${commenter.firstName[0]}${commenter.lastName[0]}`
                    : 'A';

                  return (
                    <div className="comment-section" key={`${comment.id}-${index}`}>
                      <div className="comment-initials">{commenterInitials}</div>
                      <div className="comment-body">
                        <div className="commenter-name">
                          {commenter ? `${commenter.firstName} ${commenter.lastName}` : 'Anonymous'}
                        </div>
                        <div className="comment-content">{comment.content}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
