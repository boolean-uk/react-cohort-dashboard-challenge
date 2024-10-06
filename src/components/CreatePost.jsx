import axios from "axios";
import { useContext, useState } from "react";
import { InputGroup, FormControl, Button, Card } from 'react-bootstrap';
import Icon from "./profile/Icon";
import { UserContext } from "../App";

const CreatePost = () => {
    const { userDetails } = useContext(UserContext)
    
    const [post, setPost] = useState({
        "title": "Nothing special",
        "content": "",
        "contactId": 3
    })

    const handleSubmit = () => {
        axios
        .post(`https://boolean-uk-api-server.fly.dev/Ic4rus90/post`, post)
        .then((res) => console.log(res))
        .catch((err) => console.error("An error occurred when posting post: ", err))
    }

    const handleChange = (event) => {
        const value = event.target.value;
        setPost({...post, content: value});
    }

    return (
        <Card>
            <Card.Body>
            <InputGroup className="mb-3" >
                <InputGroup.Text>
                    <Icon contact={userDetails}/>
                </InputGroup.Text>
                <FormControl
                    style={{ backgroundColor: '#e6ebf5' }}
                    placeholder="What's on your mind?"
                    aria-label="Post"
                    name="post"
                    value={post.content}
                    onChange={handleChange}
                />
                <Button variant="primary" onClick={handleSubmit}>
                    Post
                </Button>
            </InputGroup>
            </Card.Body>
        </Card>
      );
};

export default CreatePost;