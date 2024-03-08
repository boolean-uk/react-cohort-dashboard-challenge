import CommentList from '../components/CommentList.jsx'
import CreateComment from '../components/CreateComment.jsx'
import Title from '../components/Title.jsx'
import { useState, useContext } from "react";
import { useParams } from 'react-router-dom'
import { DataContext } from "../../App";

function Post() {
    const { id } = useParams()
    const { user, posts, getContactById } = useContext(DataContext);
    const post = posts?.find(x => x.id === parseInt(id));
    const contact = getContactById(post?.contactId)
    const [comments, setComments] = useState([])

    if (contact && post && user) return (
        <div className='single-post-list-container'>
            <ul>
                <li>
                    <div className="post-container">
                        <Title post={post} contact={contact} />
                        <div className="content-container">
                            {post.content}
                        </div>
                        <CommentList postId={post.id} contactId={post.contactId} comments={comments} setComments={setComments} />
                        <CreateComment postId={post.id} comments={comments} setComments={setComments} />
                    </div>
                </li>
            </ul>
        </div>
    );

    return (
        <li>
            <p>Loading...</p>
        </li>
    )
}

export default Post;
