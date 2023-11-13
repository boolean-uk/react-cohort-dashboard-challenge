import { useNavigate, useParams, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"

export default function ViewPost({posts}) {
    const [viewPost, setViewPost] = useState([])

    const navigate = useNavigate()

    const {id} = useParams()

    useEffect(() => {
        if (posts && id) {
            const findPost = posts.find(post => Number(post.id) === Number(id))
            setViewPost(findPost)
        }
    }, [id, posts])

    // const initials = user.firstName.charAt(0) + user.lastName.charAt(0)

    return (
        <div className="main">
            <div className="posts-container">
                <ul>
                    <li className="post">
                        <div className="post-header">
                            <div className="user-img-container">
                                <p>IS</p>
                            </div>
                            <div className="name-and-title">
                                <p className="user-name">Ilham Saleh</p>
                                <p>{viewPost.title}</p>
                            </div>
                        </div>
                        <div className="content-container">
                            {viewPost.content}
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}