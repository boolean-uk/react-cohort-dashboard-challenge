import { useContext, useEffect, useState } from "react";
import ProfileCircle from "../../Helper/profileCircle";
import { ContentContext } from "../../Helper/Contex";

import Comments from "./Comments";
import { Link } from "react-router-dom";

export default function PostListItem({ element, users }) {
    const context = useContext(ContentContext)
    const url = 'https://boolean-uk-api-server.fly.dev/panfi98/post'
    const [id, setId] = useState(element.contactId)
    const [user, setUser] = useState(users.find(user => user.id === id));

    const [userName, setUserName] = useState(user ? user.firstName + ' ' + user.lastName : '')
    const [postText, SetPostText] = useState(element.content)

    const [initials, setInitials] = useState(user ?
        `${user.firstName.charAt(0) + user.lastName.charAt(0)}` :
        "user not loaded");

    const [color, setColor] = useState(user ?
        user.favouriteColour :
        '#FFFFFF'
    )

    const [comments, setComments] = useState([])

    useEffect(() => {
        fetchComments(element.id)
    }, [])

    const fetchComments = async (postId) => {
        const response = await fetch(url + `/${postId}/` + 'comment')
        const data = await response.json()
        setComments(data)
    }
    return (
        <ul className="listelemnt">
            <div>
                <ProfileCircle className='circlepost' initials={`${initials}`} color={color} />
                <div className="horizontal">
                    <h2>{userName}<br /></h2>
                    <Link to={`/post/${element.id}`}>{element.title}</Link>
                </div>
            </div>

            <p>{postText}</p>

            <h3>Comments</h3>
            <ul className="commentlist">
                <Comments users={users} comments={comments} fetchComments={fetchComments} postId={element.id} />
            </ul>

        </ul>
    )
}