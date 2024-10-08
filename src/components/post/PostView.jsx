import { Card, Col, Container, Row } from "react-bootstrap";
import { PostAuthorSection } from "./PostAuthorSection";
import { CommentSection } from "../comment/CommentSection";
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ContactContext } from "../../App";
import Send from '../../../_assets/send.svg';
import Trash from '../../../_assets/trash.svg';


export function PostView(){

    const {id} = useParams();
    const { posts, fetchPosts } = useContext(ContactContext);

    const nav = useNavigate();

    const [formData, setFormData] = useState({
        content: "",
        contactId: 0,
        title: ""
    });

    const [isEditing, setIsEditing] = useState(false); 

    const handleEditClick = () => {
        setIsEditing(true); 
    };

    useEffect(() => {
        if(post) {
            setFormData({
                content: post.content,
                contactId: post.contactId,
                title: ""
            });
        }
      }, []);

    if(!posts) {
        return "Loading...";
    }
   
    const post = posts.find((c) => c.id === parseInt(id));
    if (!post) {
        return "Loading..";
    }

    async function handleSubmit(event) {
        console.log("keo");
        
        event.preventDefault();

        await fetch(`https://boolean-uk-api-server.fly.dev/tuvaea/post/${post.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)

        })
        
        await fetchPosts();
        setIsEditing(false);
    }


    async function handleDelete(event) {
        
        event.preventDefault();

    try {
        await fetch(`https://boolean-uk-api-server.fly.dev/tuvaea/post/${post.id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        });

        await fetchPosts(); 
        nav("/");

    } catch (error) {
        console.error("Error deleting the post:", error);
    }
    }

    
    

  
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    
    

    return(
        <Container fluid className="d-flex flex-column p-4">
            <Card className="post-card post-card-single">
                <Container className="post-separator m-0 p-0">
                    <Row className="align-items-center p-0 m-0 ">
                        <PostAuthorSection post={post}/>
                    </Row>
                    <Row className="align-items-center justify-content-between bottommargin">
                        <Col  className="p-0 m-0">
                        <form onSubmit={handleSubmit} className="d-flex p-0 m-0">
                                    {!isEditing ? (
                                        <h3
                                            className="post-content "
                                            onClick={handleEditClick}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            {post.content }
                                        </h3>
                                    ) : (
                                        <input
                                            type="text"
                                            name="content"
                                            value={formData.content}
                                            onChange={handleChange}
                                            autoFocus 
                                            className="form-control ms-2 post-form-edit"
                                        />
                                    )}
                                    {isEditing && (
                                        <button  type="submit" className="btn submit-button-comment" style={{background:"#ffff"}}>
                                            <img src={Send} alt="Send" className="edit-icons" />
                                        </button>
                                    )}
                                </form>
                        
                        </Col>
                        <Col xs="auto" className="p-0 m-0 ">
                                <button onClick={handleDelete} className="btn submit-button-comment" style={{background:"#ffff"}}>
                                    <img src={Trash} alt="Send" className="edit-icons" />
                                </button>
                        
                        </Col>
                    </Row>
                </Container>
                <Container className="m-0 p-0">
                    <CommentSection post={post}/>
                </Container>
            </Card>
        </Container>
        
    )
}