
import SendArrow from '../../assets/SendArrow.jsx';
import { useState, useContext, useEffect } from "react";
import { StyleContext } from "../../App.jsx";
import { DataContext } from "../../App.jsx";

function CreateComment({ postId, comments, setComments }) {
    const { getColorFromInitials, getInitials } = useContext(StyleContext);
    const { posts, postComment, user } = useContext(DataContext);
    const [hover, setHover] = useState(false);
    const [content, setContent] = useState('');

    const handleChange = (e) => {
        setContent(e.target.value)
        console.log(e.target.value)
    }

    const handleClick = () => {
        postComment(postId, content, user.id);
        setComments([...comments, { postId: postId, content: content, contactId: user.id }])
        setContent('');
    }

    useEffect(() => {
        setContent('')
      }, [posts]);

    if (user) return (
        <div className="create-comment">
            <div className="profile-pic" style={{ backgroundColor: getColorFromInitials(getInitials(user.firstName, user.lastName)) }}>
                {getInitials(user.firstName, user.lastName)}
            </div>
            <div className='comment-input'>
                <input type="text" placeholder="Add a comment..." value={content} onChange={handleChange} />
                <button onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onClick={handleClick}>
                    <SendArrow fill={hover ? '#000046' : '#64648C'} />
                </button>
            </div>
        </div>
    );

    return (
        <li>
            <p>Loading...</p>
        </li>
    )
}

export default CreateComment;
