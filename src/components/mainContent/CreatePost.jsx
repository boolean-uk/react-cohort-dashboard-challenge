import styled from "styled-components";
import ProfileCircle from "../ProfileCircle";
import { CohortAppContext } from "../../context";
import { useContext, useState } from "react";
import { create } from "../../api/api";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 10px;
`;

const Input = styled.input`
  flex: 1;
  margin-left: 20px;
  padding: 10px;
  background-color: #e6ebf5;
  color: #6d6d93;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  box-sizing: border-box;
`;

const TextArea = styled.textarea`
  width: 100%;
  background-color: #e6ebf5;
  color: #6d6d93;
  padding: 15px;
  border: none;
  resize: none;
  border-radius: 4px;
  font-size: 16px;
  margin-bottom: 10px;
  box-sizing: border-box;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  box-sizing: border-box;
`;

const PostButton = styled.button`
  padding: 10px 20px;
  background-color: #000046;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #2980b9;
  }
`;

const CreatePost = () => {
  const { userProfile, posts, setPosts } = useContext(CohortAppContext);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && content.trim()) {
      const newPost = {
        contactId: userProfile.id,
        title,
        content,
        comments: [],
      };
      create("post", newPost);
      setPosts([newPost, ...posts]);
      setTitle("");
      setContent("");
    }
  };

  return (
    <Card>
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <ProfileCircle
            id={userProfile.id}
            firstName={userProfile.firstName}
            lastName={userProfile.lastName}
          />
          <Input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </InputGroup>
        <TextArea
          placeholder="What's on your mind?"
          rows="3"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <ButtonWrapper>
          <PostButton type="submit">Post</PostButton>
        </ButtonWrapper>
      </Form>
    </Card>
  );
};

export default CreatePost;
