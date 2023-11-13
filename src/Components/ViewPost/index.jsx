import { useNavigate, useParams, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"

export default function ViewPost({posts}) {
    const [viewPost, setViewPost] = useState(undefined)
    const [postUser, setPostUser] = useState({})

    const navigate = useNavigate()

    const {id} = useParams()

    // useEffect(() => {      
    // }, [id, posts])
    if (posts && id && !viewPost) {
        const findPost = posts.find(post => Number(post.id) === Number(id))
        setViewPost(findPost)
    }

    
    // useEffect(() => {
    //     const postUserId = Number(viewPost.contactId)
    //     console.log("PostUserId", typeof postUserId)
    //     fetch(`https://boolean-api-server.fly.dev/ilham-saleh/contact/${postUserId}`)
    //     .then(res => res.json())
    //     .then(data => {
    //         setPostUser(data)
    //         console.log("Data", data)
    //     })
    // }, [])
    // console.log("Post User", postUser)


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
                                {/* <p className="user-name">{postUser.firstName}</p> */}
                                <p>{viewPost?.title}</p>
                            </div>
                        </div>
                        <div className="content-container">
                            {viewPost?.content}
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}