import { useEffect, useState } from "react";
import Comment from "./Comment";

export default function CommentList(props) {
    const [displayComments, setDisplayComments] = useState([])
    //This state makes sure that if comments exceed 3 only the most recent will show
    const [hideComments, setHideComments] = useState(false)
    //This state makes sure that once you collapse all comments, then if you add a new one, it won't hide the older comments
    const [noHide, setNoHide] = useState(false)
    const {comments} = props

    const handleClick = () => {
        setDisplayComments([...comments])
        setHideComments(false)
        setNoHide(true)
    }

    useEffect(() => {
        setDisplayComments([...comments])
        if (!noHide){
            if (comments.length > 3) {
                setHideComments(true)
                setDisplayComments(comments.slice(comments.length-3))
            }
        }
    },[comments])

    return (
        <li >
            {
                hideComments &&
                <p className="see-comments" onClick={handleClick}>See previous comments</p>
            }
            <ul className="comment-list">
                {
                    displayComments.map((comment,index) => {
                        return <Comment key={index} comment={comment}/>
                    })
                }
            </ul>
        </li>
    )    
}
            
            
            