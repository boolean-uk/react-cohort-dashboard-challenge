import { useNavigate, useParams, useLocation } from "react-router-dom"
import { useState, useEffect } from "react"

export default function ViewPost({posts, getPosts}) {
    const [viewPost, setViewPost] = useState(undefined)
    const [postUser, setPostUser] = useState(undefined)
    const [postComments, setPostComments] = useState([])
    const [postCommentAuthors, setPostCommentAuthors] =  useState([])

    const navigate = useNavigate()

    const {id} = useParams()


    // useEffect(() => {      
    // }, [id, posts])
    
    if (posts && id && !viewPost && posts.length !== 0) {
        const findPost = posts.find(post => Number(post.id) === Number(id))
        setViewPost(findPost)
        // console.log("findPost", findPost)
    }
    
    useEffect(() => {
        if (postUser) {
            const postUserId = Number(viewPost?.contactId)
            fetch(`https://boolean-api-server.fly.dev/ilham-saleh/contact/${postUserId}`)
            .then(res => res.json())
            .then(data => {
                setPostUser(data)
                // console.log("postUser", data)
            })
        }
       }, [])

       
    useEffect(() => {
        fetch(`https://boolean-api-server.fly.dev/ilham-saleh/post/${id}/comment`)
        .then(res => res.json())
        .then(postCommentsData => {
            setPostComments(postCommentsData)
            // console.log("poscomment data", postCommentsData)
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
                    // console.log("comment and authors", commentAndAuthors)        
                })
            })
            Promise.all(promises)
        }
    }, [postComments])
    
    
    const removePost = () => {
        const option = {method: 'DELETE'}

        fetch(`https://boolean-api-server.fly.dev/ilham-saleh/post/${id}`, option)
        .then(res => res.json())
        .then((data) => getPosts(data))

        navigate('/')
    }

    return (
        <div className="main">
            <div className="posts-container">
                <ul key={id}>
                    <li className="post">
                        <div className="post-header">
                            <div className="user-img-container">
                                {postUser ? (
                                    <p>{postUser?.firstName[0]}{postUser?.lastName[0]}</p>
                                ) : <p>User</p>}
                            </div>
                            <div className="name-and-title">
                                {postUser ? (
                                    <p className="user-name">{postUser?.firstName} {postUser?.lastName}</p>
                                ) : <h4>User</h4>}
                                <p>{viewPost?.title}</p>
                            </div>
                            <button className="delete" onClick={removePost}>Delete the post</button>
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