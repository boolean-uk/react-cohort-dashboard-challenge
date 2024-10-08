import { useContext,  useEffect,  useState } from "react";
import { Col, Row } from "react-bootstrap";
import { ContactContext } from "../../App";
import { ProfileIcon } from "../header/ProfileIcon";
import '../dashboard/Dashboard.css'
import PropTypes from "prop-types";
import Send from '../../../_assets/send2.svg';



export function CommentForm({post}) {
    
    const { signedInUser, fetchPosts } = useContext(ContactContext); 

    const initialFormData = {
        postId: post.id,
        contactId: signedInUser?.id || 0,
        content: ""
    };

    const [formData, setFormData] = useState(initialFormData);


    useEffect(() => {
        if (signedInUser) {
          setFormData((prev) => ({
            ...prev,
            contactId: signedInUser.id, 
          }));
        }
      }, [signedInUser]);

      if (!signedInUser) {
        return "loading...";
    }


    async function handleSubmit(event) {
        event.preventDefault();

        await fetch(`https://boolean-uk-api-server.fly.dev/tuvaea/post/${post.id}/comment`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)

        })
        
        
        await fetchPosts();
        setFormData(initialFormData);
    }

  
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    return(
        
        <Row className="align-items-center p-0  comment-form-margin">
            <Col xs="auto" className="p-0 m-0">
                <ProfileIcon contactId={signedInUser.id}/>
            </Col>
            <Col className="p-0 m-0">
                <form onSubmit={handleSubmit} className="d-flex">
                <input
                type="text"
                name="content"
                value={formData.content}
                onChange={handleChange}
                className="form-control flex-grow-1  ms-2 comment-form"
                placeholder="Add a comment"
                />
                <button type="submit" className="btn submit-button-comment">
                    <img src={Send} alt="Send" className="send-button-style" />
                </button>
                </form>
            </Col>
        </Row>
  
    )
}

CommentForm.propTypes = {
    post: PropTypes.object.isRequired,
  };