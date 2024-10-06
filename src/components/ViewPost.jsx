import axios from "axios";
import { useContext, useEffect, useState } from "react";
import AddComment from "./AddComment";
import '../styling/postlistitem.css';
import Card from 'react-bootstrap/Card';
import PostListComment from "./PostListComment";
import Icon from "./profile/Icon";
import { ContactContext, PostContext } from "../App";
import { Link, useParams } from "react-router-dom";

const ViewPost = () => {
    const [comments, setComments] = useState([]);
    const [contact, setContact] = useState(null);
    const [post, setPost] = useState(null);
    const [viewAllComments, setViewAllComments] = useState(false);

    const { id } = useParams();
    const { posts } = useContext(PostContext);
    const { contacts } = useContext(ContactContext);

    useEffect(() => {
        if (posts && id) {
            const getPost = posts.find((postItem) => 
                Number(postItem.id) === Number(id));
            if (getPost) {
                setPost(getPost);
            } else {
                console.error(`No posts found with id ${id}`);
            }
        }
    }, [id, posts]);

    useEffect(() => {
        if (post && post.contactId && contacts) {
            const findContact = contacts.find((contactItem) => contactItem.id === post.contactId);
            if (findContact) {
                setContact(findContact);
            } else {
                console.error(`No contact found with id ${post.contactId}`);
            }
        }
    }, [post, contacts]);

    useEffect(() => {
        if (post && post.id) {
            axios
                .get(`https://boolean-uk-api-server.fly.dev/Ic4rus90/post/${post.id}/comment`)
                .then(res => {
                    if (res.data) {
                        setComments(res.data.reverse());
                    } else {
                        console.error("No comments received");
                    }
                })
                .catch(err => console.error("An error occurred when getting comments: ", err));
        }
    }, [post]);

    if (!post || !contact) {
        return <div>Loading...</div>;
    }

    const handleGetAllComments = () => {
        setViewAllComments(true)
    }

    return (
        <Card>
            <Card.Body>
                <div className="d-flex align-items-center">
                    <Icon contact={contact} />
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
                    <button onClick={handleGetAllComments}> Show previous posts </button>
                        {comments.slice(0, 3).map((comment, i) => (
                            <PostListComment
                                comment={comment}
                                key={i}
                            />
                        ))}
                    </div>
                }
                </ul>
                <AddComment id={post.id} />
            </Card.Body>
        </Card>
    );
};

export default ViewPost;
