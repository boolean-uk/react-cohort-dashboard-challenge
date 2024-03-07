import '/src/styles/Feed/post/commentSection/CommentSection.css'

import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { getComments } from '../../../../utils/commentRequest';
import { Comment } from './Comment';

export const CommentSecton = ({postId}) => {
    const [comments, setComments] = useState([]);
    const [showAllComments, setShowAllComments] = useState(false);

    useEffect(() => {
      getComments(postId)
        .then((data) => {
          setComments(data);
      });
    }, []);

    if (!comments) return (<p>Loading comments...</p>)

    const commentsToDisplay = showAllComments ? comments : comments.slice(0, 3);

    return (
      <>
        { comments.length > 3 ?
          <p
            className='see-previous-comments'
            onClick={() => setShowAllComments(!showAllComments)}
          >{showAllComments ? "See less comments" : "See previous comments"}</p>
          : <p></p>
        }
        <div className="comment-section-container">
          {commentsToDisplay.map((comment, index) => (
            <Comment key={index} comment={comment} />
          ))}
        </div>
      </>
    );
}

CommentSecton.propTypes = {
    postId: PropTypes.number.isRequired,
};