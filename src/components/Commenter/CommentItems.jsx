import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function CommentItems(props) {
    const {comment} = props

    const userUrl = 'https://boolean-uk-api-server.fly.dev/George-Alexander-S/contact'

    const [userName, setUserName] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${userUrl}/${comment.contactId}`);
            const jsonData = await response.json();
            setUserName(`${jsonData.firstName} ${jsonData.lastName}`);
        };
        fetchData();
    }, []);

    return (
        <li className="li-postviewer">
            <h5><Link to={comment.contactId === 1 ? "/primeUser/1" : `/profile/${comment.contactId}`}>
        {userName}
    </Link></h5>
            <p>{comment.content}</p>
        </li>
    )
}

export default CommentItems