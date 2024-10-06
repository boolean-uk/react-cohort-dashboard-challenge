import Card from 'react-bootstrap/Card';
import Icon from './profile/Icon';
import { useContext, useEffect, useState } from 'react';
import { ContactContext, UserContext } from '../App';
import axios from 'axios';

const PostListComment = ({ comment }) => {
    const [contact, setContact] = useState(null)

    const { contacts } = useContext(ContactContext)

    const { userDetails } = useContext(UserContext)

    useEffect(() => {
        const matchedContact = contacts.find((contact) => contact.id === comment.contactId);

        if (matchedContact !== undefined){
            setContact(matchedContact)
        } else {
            console.log("Could not find user.")
        }
    }, [contacts, comment, contact])

    if (contact === null) {
        return "Loading...";
    }

    const handleDelete = () => {
        axios
        .delete(`https://boolean-uk-api-server.fly.dev/Ic4rus90/post/${comment.postId}/comment/${comment.id}`)
        .then((res) => {
            console.log("Comment successfully deleted", res);
        })
        .catch((err) => {
            console.error("Error deleting comment", err);
        })
    }

    return (
        <div className="d-flex align-items-start mb-3">
        <Icon contact={contact}/>

        <Card className="ms-3" style={{ backgroundColor: '#e6ebf5', borderRadius: '10px' }}>
            <Card.Body>
                <Card.Title className="fw-bold mb-1"> 
                    {`${contact.firstName} ${contact.lastName}`}  
                </Card.Title>
                <Card.Text>{comment.content}</Card.Text>
                {comment.contactId === userDetails.id ? 
                <div>
                    <button>Edit comment </button>
                    <button onClick={handleDelete}>Delete comment</button>
                </div>
                :
                <div></div>     
            }
                <Card.Text></Card.Text>
            </Card.Body>
        </Card>
        </div>
    )
}

export default PostListComment