import "../../../styles/Post.css"
import ProfilePicture from "../../ProfilePicture"
import { UsersContext, ConnectionContext } from "../../../App"
import { useContext, useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import Comments from "./Comments"
import CreateComment from "./CreateComment"


function PostListItem({ postIdAlt }) {
    const {postId} = useParams()
    const {url} = useContext(ConnectionContext);
    const {users, posts } = useContext(UsersContext)

    const post = posts.find(p => p.id == (postId || postIdAlt))

    if ( !post ) return <a>Loading ...</a>

    const [user, setUser] = useState({})
    const [comments, setComments] = useState([])
    const [shownComments, setShownComments] = useState([])
    const [hideComments, setHideComments] = useState(true)

    useEffect(() => {
        fetch(`${url}/${post.id}/comment`, {
            method: "GET", 
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(res => res.json()).then(setComments)

        setUser(users.find(u => u.id == post.contactId))
    }, [users, post, url])

    useEffect(() => {
        if ( hideComments && !postId )
            setShownComments(comments.toReversed().slice(0, 3))
        else
            setShownComments(comments.toReversed());
    }, [comments, hideComments, postId])

    if ( !user || !shownComments) return <a>Loading ...</a>

    return (
        <>
            <ul className='post'>
                <div className='post-header'>
                    <Link to={`/profile/${user.id}`} >
                        <ProfilePicture 
                            firstName={user.firstName} 
                            lastName={user.lastName} 
                            favouriteColour={user.favouriteColour}/>
                    </Link>
                    <div className='owner-info'>
                    {postIdAlt && <Link to={`/post/${post.id}`} className='post' id='link'>
                        <h2>{user.firstName} {user.lastName}</h2>
                        <p>{post.title}</p>
                    </Link>}
                    {postId && <div className="post-body">
                        <h2>{user.firstName} {user.lastName}</h2>
                        <p>{post.title}</p>
                    </div>}
                    </div>
                </div>

                <p className='content'>{post.content}</p>

                <ul className='comments'>
                    {postIdAlt && <button onClick={() => setHideComments(hc => !hc)} className='comment-list-btn'>{hideComments ? "Show more comments" : "Hide extra commenst"}</button>}
                    {shownComments.map((comment, key) =>
                    <Comments comment={comment} key={key}/> 
                    )}
                </ul>
            <CreateComment post={post} setComments={setComments}/>
            </ul>
        </>
    )
}

export default PostListItem