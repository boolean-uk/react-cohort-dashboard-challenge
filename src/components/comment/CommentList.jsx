// get comments list
import '../dashboard/Dashboard.css'
import { CommentListItem } from './CommentListItem';
import PropTypes from "prop-types";





export function CommentsList({comments, fetchComments}) {

    return(
        <ul className="ul">
            {comments.map(( comment ) => (
                <CommentListItem  key={comment.id} comment={comment} fetchComments={fetchComments} />
            ))}
        </ul>
    )

}

CommentsList.propTypes = {
    comments: PropTypes.array.isRequired,
    fetchComments: PropTypes.func.isRequired,
  };