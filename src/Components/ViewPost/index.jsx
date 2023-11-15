import { useNavigate, useParams, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"

export default function ViewPost({posts}) {
    const [viewPost, setViewPost] = useState(undefined)
    const [postUser, setPostUser] = useState(undefined)
    const [postComments, setPostComments] = useState([])
    const [postCommentAuthors, setPostCommentAuthors] =  useState([])

    const navigate = useNavigate()

    const {id} = useParams()

    // console.log(postComments)

    // useEffect(() => {      
    // }, [id, posts])
    if (posts && id && !viewPost) {
        const findPost = posts.find(post => Number(post.id) === Number(id))
        setViewPost(findPost)
    }
    
    useEffect(() => {
        const postUserId = Number(viewPost.contactId)
        fetch(`https://boolean-api-server.fly.dev/ilham-saleh/contact/${postUserId}`)
        .then(res => res.json())
        .then(data => {
            setPostUser(data)
        })
       }, [])


    useEffect(() => {
        fetch(`https://boolean-api-server.fly.dev/ilham-saleh/post/${id}/comment`)
        .then(res => res.json())
        .then(postCommentsData => {
            setPostComments(postCommentsData)
        })
    }, [])

    useEffect(() => {
        if (postComments) {
            const promises = postComments.map(postComment => {
                return fetch(`https://boolean-api-server.fly.dev/ilham-saleh/contact/${postComment.contactId}`)
                .then(res => res.json())
                .then(postCommentAuthorData => {
                    const commentAndAuthors = {
                        ...postComment,
                        firstName: postCommentAuthorData.firstName,
                        lastName: postCommentAuthorData.lastName
                    }
                    setPostCommentAuthors((authors) => [...authors, commentAndAuthors])              
                })
            })
            Promise.all(promises)
        }
    }, [postComments])
    

    return (
        <div className="main">
            <div className="posts-container">
                <ul key={id}>
                    <li className="post">
                        <div className="post-header">
                            <div className="user-img-container">
                                {postUser ? (
                                    <p>{postUser?.firstName[0]}{postUser.lastName[0]}</p>
                                ) : <p>User</p>}
                            </div>
                            <div className="name-and-title">
                                <p className="user-name">{postUser?.firstName} {postUser?.lastName}</p>
                                <p>{viewPost?.title}</p>
                            </div>
                        </div>
                        <div className="content-container">
                            {viewPost?.content}
                        </div>
                        <div className="comments" > 
                            {postCommentAuthors.map((postCommentAuthor, index) => (
                         <ul key={index}>
                             <li>
                                <div className="comment-container">
                                 <div className="user-img-container">
                                    {postCommentAuthor?.firstName[0]}{postCommentAuthor.lastName[0]}
                                </div>
                                <div className="comment-user-content">                           
                                    <h5>{postCommentAuthor?.firstName} {postCommentAuthor.lastName}</h5> 
                                    <p>{postCommentAuthor?.content}</p>
                                </div>
                              </div>
                            </li>
                        </ul>
                    ))}
                    </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}