import { useState } from 'react'
import CommentItem from './CommentItem'
import { useContactsPosts } from '../../context/ContactPostContext'

export default function CommentList({ comments, showAllFromStart }) {
    const [showAll, setShowAll] = useState(showAllFromStart)
    const { contacts } = useContactsPosts()

    const displayedComments = showAll ? comments : comments.slice(0, 3)

    return (
        <div>
            <h4>Comments</h4>
            {displayedComments.map((comment) => {
                const commentContact = contacts.find(c => c.id === comment.contactId)

                if (!commentContact) {
                    return null
                }

                return (
                    <CommentItem key={comment.id} comment={comment} contact={commentContact} />
                );
            })}
            {comments.length > 3 && (
                <button onClick={() => setShowAll(!showAll)}>
                    {showAll ? 'Show Less' : 'Show More'}
                </button>
            )}
        </div>
    )
}
