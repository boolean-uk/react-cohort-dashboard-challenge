import axios from "axios"
import { useContext, useEffect, useState } from "react"
import AddComment from "./AddComment"
import '../styling/postlistitem.css'
import Card from 'react-bootstrap/Card';
import PostListComment from "./PostListComment"
import Icon from "./profile/Icon"
import { ContactContext, UserContext } from "../App"
import { Link } from "react-router-dom";

const PostListItem = ({ post }) => {
    const [comments, setComments] = useState([]);
    const [contact, setContact] = useState(null);
    const [viewAllComments, setViewAllComments] = useState(false);

    const { contacts } = useContext(ContactContext);
    const { userDetails } = useContext(UserContext)

    // Find user who made the post. 
    useEffect(() => {
        const findContact = contacts.find((contact) => contact.id === post.contactId);
        if (findContact) {
            setContact(findContact);
        } else {
            console.error(`No contact found with id ${post.contactId}`);
        }
    }, [post, contacts]);
    
    // Retrieving comments to specific post. Don't see a better way of doing this.
    useEffect(() => {
        axios
            .get(`https://boolean-uk-api-server.fly.dev/Ic4rus90/post/${post.id}/comment`)
            .then(res => {
                if (res.data) {
                    setComments(res.data);
                } else {
                    console.error("No comments received");
                }
            })
            .catch(err => console.error("An error occurred when getting comments: ", err));
    }, [post]);
    
    if (!post || !contact) {
        return <div>Loading...</div>;
    }

    const handleDelete = () => {
        axios
        .delete(`https://boolean-uk-api-server.fly.dev/Ic4rus90/post/${post.id}`)
        .then((res) => {
            console.log("Comment successfully deleted", res);
        })
        .catch((err) => {
            console.error("Error deleting comment", err);
        })
    }

    const handleGetAllComments = () => {
        setViewAllComments(true)
    }

    return (
            <Card>
              <Card.Body>
                <div className="d-flex align-items-center">  
                    <Icon contact={contact}/> 
                    <div className="ms-3">
                        <Card.Title className="fw-bold mb-2">
                            {contact.firstName} {contact.lastName}
                        </Card.Title>
                        <Card.Subtitle className="text-muted mb-2">
                            <Link to={`/post/${post.id}`}>
                                {post.title}
                            </Link>
                        </Card.Subtitle>
                    </div>
                </div>
                <Card.Text>
                  {post.content}
                </Card.Text>
                    {post.contactId === userDetails.id ? 
                        <div>
                        <button>Edit post </button>
                        <button onClick={handleDelete}>Delete post</button>
                    </div>
                    :
                    <div> </div>    
                }
                <ul className="d-flex flex-column" style={{ gap: '2px' }}>
                {comments.length < 4 || viewAllComments ? 
                    comments.map((comment, i) => (
                        <PostListComment
                            comment={comment}
                            key={i}
                        />
                    ))
                    : 
                    <div>
                    <button onClick={handleGetAllComments}> Show previous comments </button>
                        {comments.slice(0, 3).map((comment, i) => (
                            <PostListComment
                                comment={comment}
                                key={i}
                            />
                        ))}
                    </div>
                }
                </ul>
                <AddComment postId={post.id} />
              </Card.Body>
            </Card>
          );
        }


export default PostListItem