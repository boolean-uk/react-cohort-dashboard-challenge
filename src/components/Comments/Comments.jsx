import PropTypes from 'prop-types';
import { useContext, useState } from 'react';
import { MetaContext } from '../../App';
import Comment from './Comment';

function Comments(props) {
    const { comments, seeLatestComment } = props;
    const { showComments } = useContext(MetaContext)
    const [showPrevious, setShowPrevious] = useState(showComments)

    const lastThreeComments = comments.slice(Math.max(comments.length - 3, 0));
    const previousComments = showPrevious ? comments.slice(0, -3) : [];

    const toggleShowPrevious = () => {
        setShowPrevious(!showPrevious); // Toggle showPrevious state
    };

    return (
        <div>
            {/* show previous button */}
            {/* {comments.length > 3 && ( */}
            {showComments === false && comments.length > 3 &&(
                <span
                    style={{ color: '#64648C', cursor: 'pointer', fontSize: '18px' }}
                    onClick={toggleShowPrevious}
                >
                    {showPrevious ? 'Hide previous comments' : 'See previous comments'}
                </span>
            )}
            {/* the previous posts. Hidden by default*/}
            {showPrevious &&
                previousComments.map((comment, index) => (
                    <Comment comment={comment} key={index} />
                ))}
            {/* The last three posts. */}
            {lastThreeComments.map((comment, index) => (
                <Comment comment={comment} key={index} />
            ))}
        </div>
    );
}

Comments.propTypes = {
    comments: PropTypes.array
};

export default Comments;
