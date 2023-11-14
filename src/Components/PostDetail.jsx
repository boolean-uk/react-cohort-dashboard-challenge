import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function fetchPostDetails(postId) {
  return fetch(`https://boolean-api-server.fly.dev/jdm1991/post/${postId}`)
    .then(response => response.json())
    .then(postData => {
      return fetch(`https://boolean-api-server.fly.dev/jdm1991/contact/${postData.contactId}`)
        .then(response => response.json())
        .then(contactData => {
          return fetch(`https://boolean-api-server.fly.dev/jdm1991/post/${postId}/comment`)
            .then(response => response.json())
            .then(commentsData => {
              return { postData, contactData, commentsData };
            });
        });
    });
}

export default function PostDetail() {
  const { postId } = useParams();
  const [data, setData] = useState({ post: null, contact: null, comments: [] });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetchPostDetails(postId)
      .then(({ postData, contactData, commentsData }) => {
        setData({ post: postData, contact: contactData, comments: commentsData });
        setIsLoaded(true);
      })
      .catch(error => {
        console.error('Sorry mate, seems we have a problem loading up!', error);
        setIsLoaded(true);
      });
  }, [postId]);

  if (!isLoaded) {
    return <div>Loading content...</div>;
  }

  const { post, contact, comments } = data;
  const initials = `${contact.firstName[0]}${contact.lastName[0]}`;

  return (
    <div className="main-content">
      <div className="each-post">
        <ul className="full-comment-ul">
          <li className="full-comment-li">
            <div className="title-container">
              <div className="initials">{initials}</div>
              <div className="comment-title">{`${contact.firstName} ${contact.lastName}`}</div>
            </div>
            <Link to={`/comments/${post.id}`}>
              <div className="comment-link">{post.title}</div>
            </Link>
            <div className="main-comment">{post.content}</div>
            <hr className="hr"></hr>
            <div className="comments">
              {comments.map((comment, index) => (
                <div className="comment-section" key={index}>
                  <div className="comment-body">
                    <div className="comment-content">{comment.content}</div>
                  </div>
                </div>
              ))}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

