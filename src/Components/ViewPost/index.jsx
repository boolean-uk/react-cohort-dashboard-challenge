import { useNavigate, useParams, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"

export default function ViewPost({posts}) {
    const [viewPost, setViewPost] = useState(undefined)
    const [postUser, setPostUser] = useState({})
    const [postComments, setPostComments] = useState([])
    const [postCommentAuthors, setPostCommentAuthors] =  useState({})

    const navigate = useNavigate()

    const {id} = useParams()

    console.log(postComments)

    // useEffect(() => {      
    // }, [id, posts])
    if (posts && id && !viewPost) {
        const findPost = posts.find(post => Number(post.id) === Number(id))
        setViewPost(findPost)
    }

    // const commentContactIdLoop = (commentContactId) => {
    //     for (let i = 0; i < commentContactId.length; i++){
    //         return commentContactId[i].contactId
    //     }
        
    // }

    useEffect(() => {
        const postUserId = Number(viewPost.contactId)
        console.log("PostUserId", postUserId)
        fetch(`https://boolean-api-server.fly.dev/ilham-saleh/contact/${postUserId}`)
        .then(res => res.json())
        .then(data => {
            setPostUser(data)
        }),

        fetch(`https://boolean-api-server.fly.dev/ilham-saleh/post/${id}/comment`)
        .then(res => res.json())
        .then(data => setPostComments(data))

        fetch(`https://boolean-api-server.fly.dev/ilham-saleh/contact/${postComments.map(postComment => postComment.contactId)}`)
        .then(res => res.json())
        .then(data => {
            setPostCommentAuthors(data)
        })
    }, [])

    console.log("PostCommentAuthor", postCommentAuthors)

    // const initials = postUser?.firstName.charAt(0) + postUser?.lastName.charAt(0)

    return (
        <div className="main">
            <div className="posts-container">
                <ul key={id}>
                    <li className="post">
                        <div className="post-header">
                            <div className="user-img-container">
                                <p>User</p>
                            </div>
                            <div className="name-and-title">
                                <p className="user-name">{postUser?.firstName} {postUser?.lastName}</p>
                                <p>{viewPost?.title}</p>
                            </div>
                        </div>
                        <div className="content-container">
                            {viewPost?.content}
                        </div>
                    {postComments.map((postComment, index) => (
                        <div className="comments" key={index}> 
                        {postCommentAuthors.map((postCommentAuthor) => (
                         <ul>
                             <li>
                                <div className="comment-container">
                                 <div className="user-img-container">

                                </div>
                                <div className="comment-user-content">
                            
                                    <h5>{postCommentAuthor?.firstName}</h5> 
                                    <p>{postComment?.content}</p>
                                </div>
                                     {/* <h5>{postCommentAuthors?.firstName}</h5> */}
                              </div>
                            </li>
                        </ul>
                        ))}
                    </div>
                    ))}
                    </li>
                </ul>
            </div>
        </div>
    )
}