import PropTypes from 'prop-types'
import Comment from "./Comment"
import { useState } from 'react';

function Comments(props) {
    const { comments } = props;
    const [showPrevious, setShowPrevious] = useState(false);

    const lastThreeComments = comments.slice(Math.max(comments.length - 3, 0));
    const previousComments = showPrevious ? comments.slice(0, -3) : [];

    return (
        <div>
            {/* show previous button */}
            {comments.length > 3 && (
                <span
                style={{ color: '#64648C', cursor: 'pointer', fontSize: '18px'}}
                onClick={() => setShowPrevious(!showPrevious)}
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
}

export default Comments