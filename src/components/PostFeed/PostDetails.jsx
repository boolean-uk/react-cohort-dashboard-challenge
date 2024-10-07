import { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { MyContext } from '../../ApiProvider';

function PostDetails() {
    const location = useLocation();
    const { commentsWithContacts, fetchCommentsWithContacts } = useContext(MyContext);

    const post = location.state?.post;

    useEffect(() => {
        fetchCommentsWithContacts(post.id);
    }, [post.id, fetchCommentsWithContacts]);

    if (!post) return <div>No post found!</div>;

    return (
        <div style={styles.postContainer}>
            <h3>{post?.contact.firstName} {post?.contact.lastName}</h3>
            <h4>{post?.title}</h4>
            <p>{post?.content}</p>

            <h5>Comments:</h5>
            {commentsWithContacts.length > 0 ? (
                commentsWithContacts.map((comment) => (
                    <div key={comment.id} style={styles.commentBox}>
                        <p><strong>{comment.contact.firstName} {comment.contact.lastName}</strong></p>
                        <p>{comment.content}</p>
                    </div>
                ))
            ) : (
                <p>No comments yet.</p>
            )}
        </div>
    );
}

const styles = {
    postContainer: {
        border: '1px solid #ccc',
        padding: '20px',
        marginBottom: '20px',
        borderRadius: '8px',
        backgroundColor: '#FFFFFF',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    },
    commentBox: {
        border: '1px solid #e0e0e0',
        padding: '10px',
        margin: '10px 0',
        borderRadius: '4px',
        backgroundColor: '#F0F5FA',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    },
};

export default PostDetails;
