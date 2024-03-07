import { useEffect, useState } from "react"
import ProfileImage from "../ProfileImage";
import "../../styles/posts/PostHeader.css";
import { useNavigate } from "react-router-dom";
export default function PostHeader({ post }) {
    const [creator, setCreator] = useState({});
    const navigate = useNavigate();
    useEffect(() => {
        fetch(`https://boolean-api-server.fly.dev/spectraldesign/contact/${post.contactId}`)
            .then((response) => response.json())
            .then((data) => setCreator(data))
    }, [post]);

    return (
        <div className="postHeaderContainer">
            <ProfileImage user={creator} w={45} h={45} />
            <div className="postHeaderDetailsContainer">
                <p className="postHeaderName" onClick={() => navigate(`/profile/${creator.id}`)}>{creator.firstName} {creator.lastName}</p>
                <p className="postHeaderTitle" onClick={() => navigate(`/post/${post.id}`)}>{post.title}</p>
            </div>
        </div>
    )
}