// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import '../style/dash.css'

// const Post = ({
//   post,
//   contact,
//   comments,
//   toggleCommentsVisibility,
//   visibleComments,
//   submitComment
// }) => {
//   const [commentContent, setCommentContent] = useState('');

//   const handleCommentSubmit = (e) => {
//     e.preventDefault();
//     if (!commentContent.trim()) return;
//     submitComment(post.id, commentContent);
//     setCommentContent('');
//   };

//   return (
//     <div className="post-card">
//       <div className="post-header">
//         <div className="author-info">
//           {contact ? `${contact.firstName} ${contact.lastName}` : 'Unknown Author'}
//         </div>
//         <Link to={`/post/${post.id}`} className="post-title-link">
//           <h3 className="post-title">{post.title}</h3>
//         </Link>
//       </div>
//       <div className="post-content">{post.content}</div>
//       <button onClick={() => toggleCommentsVisibility(post.id)} className="toggle-comments-btn">
//         {visibleComments ? 'Hide Comments' : 'Show Comments'}
//       </button>
//       {visibleComments && (
//         <div className="comments-section">
//           {comments.length > 0 ? (
//             comments.map((comment, index) => (
//               <div key={index} className="comment">
//                 <p>{comment.content}</p>
//               </div>
//             ))
//           ) : (
//             <p>No comments yet.</p>
//           )}
//           <form onSubmit={handleCommentSubmit} className="comment-form">
//             <textarea
//               className="comment-input"
//               placeholder="Add a comment..."
//               value={commentContent}
//               onChange={(e) => setCommentContent(e.target.value)}
//             />
//             <button type="submit" className="submit-comment-btn">Submit Comment</button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Post;
