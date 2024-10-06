import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import Icon from "./profile/Icon";
import { UserContext } from "../App";

const AddComment = ({ postId }) => {
    const [comment, setComment] = useState({
        "postId": 0,
        "content": "",
        "contactId": 420
    })

    const { userDetails } = useContext(UserContext)

    useEffect(() => {
        setComment((previousComment) => ({
            ...previousComment, 
            postId: Number(postId),
            contactId: userDetails.id
        }));
    }, [postId, userDetails]);

    const handleSubmit = () => {
        console.log(comment)
        axios
        .post(`https://boolean-uk-api-server.fly.dev/Ic4rus90/post/${postId}/comment`, comment)
        .then((res) => console.log(res))
        .catch((err) => console.error("An error occurred when posting post: ", err))
    }

    const handleChange = (event) => {
        const value = event.target.value;
        setComment({...comment, content: value});
        // setComment({...comment, contactId: userDetails.id});
    }

    return (
        <InputGroup className="mb-3" >
            <InputGroup.Text>
                <Icon contact={userDetails}/>
            </InputGroup.Text>
            <FormControl
                style={{ backgroundColor: '#e6ebf5' }}
                placeholder="Comment..."
                aria-label="Comment"
                name="content"
                value={comment.content}
                onChange={handleChange}
            />
            <Button variant="primary" onClick={handleSubmit}>
                Comment
            </Button>
        </InputGroup>
      );
};

export default AddComment;