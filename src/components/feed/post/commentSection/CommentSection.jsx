import '/src/styles/Feed/post/commentSection/CommentSection.css';

import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { getComments } from '../../../../utils/commentRequests';
import { Comment } from './Comment';
import { CreateComment } from './CreateComment';

export const CommentSecton = ({postId}) => {
  const [comments, setComments] = useState([]);
  const [showAllComments, setShowAllComments] = useState(false);

  useEffect(() => {
    getComments(postId)
      .then((data) => {
        setComments(data);
    });
  }, [postId]);

  if (!comments) return (<p>Loading comments...</p>)

  return (
    <>
      {comments.length > 3 ?
        <p
          className='see-previous-comments'
          onClick={() => setShowAllComments(!showAllComments)}
        >
          {showAllComments ? "See less comments" : "See previous comments"}
        </p>
       : <p className='no-comments'></p>
      }
      {comments.map((comment, index) => (
        !showAllComments && index < comments.length - 3 ? null : (
          <Comment key={index} comment={comment} />
        )
      ))}
      <CreateComment postId={postId} setComments={setComments} />
    </>
  );
}


CommentSecton.propTypes = {
  postId: PropTypes.number.isRequired,
};
