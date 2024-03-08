import { useContext, useState, useEffect } from "react"
import { AppContext } from "../../App"
import { useParams } from "react-router-dom"
import Avatar from "react-avatar"
import RenderComments from "../Dashboard/PostListItem/Comments"
import '../Dashboard/style.css'


function SpesificPost(){
    const {contacts, posts, loggedInUser} = useContext(AppContext)
    const [post, setPost] = useState({})
    const [author, setAuthor] = useState({})
    const [comments, setComments] = useState([])
    const {id} = useParams()

    useEffect(() => {
        if (posts) {
            const postId = parseInt(id);
            if (!isNaN(postId)) {
              setPost(posts.find((p) => p.id === postId));
            } else {
              console.error("Invalid post ID");
            }
          }
    }, [posts, id])

    useEffect(() => {
        if (post.contactId && contacts) {
          setAuthor(contacts.find((a) => parseInt(a.id) === parseInt(post.contactId)));
        }
      }, [post, contacts]);

    useEffect(() => {
        fetch(`https://boolean-api-server.fly.dev/ThomasKva/post/${id}/comment`)
        .then(response => response.json())
        .then((data) => setComments(data))
        .catch(error => console.error("No comments found...", error))
    }, [id])

    if(!posts) return <p>Couldn't fetch posts</p>
    if(!loggedInUser) return <p>Please logg inn</p>
    if(!post) return <p>Couldn't grab post</p>

    return(
        <>
            <div className="post-item-container">
            <div className="post-item">
                    <div className="post-header">
                        <Avatar className="post-avatar" name={`${author.firstName} ${author.lastName}`} 
                            round={true} textSizeRatio={2}/>
                        <div className="post-details">
                            <h3 className="author-name">{`${author.firstName} ${author.lastName}`}</h3>
                            <h4 className="post-title">{post.title}</h4>
                        </div>
                    </div>
                    <div className="post-content">
                        <p>{post.content}</p>
                    </div>
                    <div>
                        <RenderComments postId={post.id} comments={comments}
                        setComments={setComments}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SpesificPost