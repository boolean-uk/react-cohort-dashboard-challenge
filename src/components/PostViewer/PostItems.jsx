import { useEffect, useState } from "react";
import Commenter from "../Commenter/Commenter";
import { Link } from "react-router-dom";

function PostItems(props) {

    const {post} = props

    const userUrl = 'https://boolean-uk-api-server.fly.dev/George-Alexander-S/contact'

    const [userName, setUserName] = useState();
    const [circleColour, setCircleColour] = useState("#ffff")


    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${userUrl}/${post.contactId}`);
            const jsonData = await response.json();
            setUserName(`${jsonData.firstName.charAt(0)}${jsonData.lastName.charAt(0)}`);
            setCircleColour(jsonData.favouriteColour);
        };
        fetchData();
    }, []);

    useEffect(() => {
        console.log(circleColour);
    }, [])

    return (
        <li className="li-postviewer">
            <h4 style={{backgroundColor: circleColour}} className="username"><Link to={post.contactId === 1 ? "/primeUser/1" : `/profile/${post.contactId}`}>
        {userName}
    </Link>
                </h4>
            <h4><Link to={`/post/${post.id}`}>{post.title}</Link></h4>
            <p>{post.content}</p>
            <Commenter postId={post.id}/>
        </li>
    )
}

export default PostItems