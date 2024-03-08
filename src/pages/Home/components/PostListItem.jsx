import CommentList from '../../components/CommentList.jsx'
import CreateComment from '../../components/CreateComment.jsx'
import Title from '../../components/Title.jsx'
import { useState, useContext } from "react";
import { DataContext } from "../../../App";

function PostListItem({ post, contact, index }) {
    const { user } = useContext(DataContext);
    const [comments, setComments] = useState([])

    if (contact && post && user) return (
        <li key={index}>
            <div className="post-container">
                <Title post={post} contact={contact} />
                <div className="content-container">
                    {post.content}
                </div>
                <CommentList postId={post.id} contactId={post.contactId} comments={comments} setComments={setComments} />
                <CreateComment postId={post.id} comments={comments} setComments={setComments} />
            </div>
        </li>
    );

    return (
        <li>
            <p>Loading...</p>
        </li>
    )
}

export default PostListItem;
