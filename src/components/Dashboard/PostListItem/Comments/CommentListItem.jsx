import { useContext, useState, useEffect } from "react"
import { AppContext } from "../../../../App"
import Avatar from "react-avatar";


function CommentListItem({ comment }) {
    const [author, setAuthor] = useState({});
    const { contacts } = useContext(AppContext);

    useEffect(() => {
        if (comment) {
            setAuthor(contacts.find((contact) => contact.id === comment.contactId));
        }
    }, [comment, contacts]);

    if (!author) return null;

    return (
        <div className="comment">
            <Avatar className="post-avatar" name={`${author.firstName} ${author.lastName}`} round={true} 
            textSizeRatio={2}/>
            <div className="comment-content">
                <h4>{author.firstName} {author.lastName}</h4>
                <p>{comment.content}</p>
            </div>
        </div>
      );
}

export default CommentListItem;