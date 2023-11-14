import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function PostDetail() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [contact, setContact] = useState(null);
  const [comments, setComments] = useState([]);
  const [commenters, setCommenters] = useState({});
  const [isCommentsLoaded, setIsCommentsLoaded] = useState(false);

  useEffect(() => {
    fetch(`https://boolean-api-server.fly.dev/jdm1991/post/${postId}`)
      .then(response => response.json())
      .then(data => {
        setPost(data);
        return fetch(`https://boolean-api-server.fly.dev/jdm1991/contact/${data.contactId}`);
      })
      .then(response => response.json())
      .then(contactData => {
        setContact(contactData);
        return fetch(`https://boolean-api-server.fly.dev/jdm1991/post/${postId}/comment`);
      })
      .then(response => response.json())
      .then(commentsData => {
        setComments(commentsData);
        setIsCommentsLoaded(true);
        return Promise.all(commentsData.map(comment => 
          fetch(`https://boolean-api-server.fly.dev/jdm1991/contact/${comment.contactId}`)
        ));
      })
      .then(responses => Promise.all(responses.map(res => res.json())))
      .then(commentersData => {
        const commentersMap = {};
        commentersData.forEach(commenter => {
          commentersMap[commenter.id] = commenter;
        });
        setCommenters(commentersMap);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setIsCommentsLoaded(true);
      });
  }, [postId]);

  if (!post || !contact || !isCommentsLoaded) {
    return <div>Be patient child, your content is loading. </div>;
  }

  const initials = `${contact.firstName[0]}${contact.lastName[0]}`;

  return (
    <div className="main-content">
      <div className="each-post">
        <ul className="full-comment-ul">
          <li className="full-comment-li">
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
