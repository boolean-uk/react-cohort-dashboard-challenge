import { useContext, useState, useEffect } from 'react'
import { MetaContext } from '../../App'
import { Link } from 'react-router-dom'
import Avatar from '../common/Avatar'
import Comments from '../Comments/Comments'
import PropTypes from 'prop-types'
import PostComment from '../Comments/PostComment'

function Post({ post, showAllComments }) {
    const { contacts } = useContext(MetaContext);
    const [comments, setComments] = useState([]);
    const [latestComment, setLatestComment] = useState({});

    useEffect(() => {
        if (post) {
            getComments();
        }
    }, [post, comments, latestComment]);

    function getComments() {
        fetch(`https://boolean-api-server.fly.dev/Hjaldrgud/post/${post.id}/comment`)
            .then((response) => response.json())
            .then((data) => {
                setComments(data);
            })
            .catch((error) => console.error("Error fetching comments:", error));
    }

    const contact = contacts.find((c) => c.id === post.contactId);
    if (!contact) {
        return <p>Loading...</p>;
    }

    return (
        <div style={{ margin: '20px', padding: '15px', backgroundColor: '#ffffff', borderRadius: '5px' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ marginRight: '10px' }}>
                    <Avatar contactId={contact.id}/>
                </div>

                <div>
                    <h3 style={{ marginBottom: '0px' }}>{contact.firstName + " " + contact.lastName}</h3>
                    <Link to={`/post/${post.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <h5  style={{ marginTop: '5px', color: '#64648c' }}>{post.title}</h5>
                    </Link>
                </div>
            </div>
            <div>
                <p style={{ marginTop: '5px', fontSize: '18px'}}>{post.content}</p>
            </div>
            <hr />
            <div>
                <Comments comments={comments} showAllComments={showAllComments} /> {/* Pass showAllComments prop */}
                <PostComment postId={post.id} setLatestComment={setLatestComment} />
            </div>
        </div>
    );
}

Post.propTypes = {
    post: PropTypes.object.isRequired
}

export default Post;
