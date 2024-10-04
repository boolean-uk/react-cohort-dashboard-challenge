import styled from "styled-components";
import CreatePost from "./CreatePost";
import PostList from "./PostsList/PostsList";

const MainContentContainer = styled.div`
  padding: 20px;
  background-color: #f4f4f4;
  height: 100%;
  overflow-y: auto;
`;

const MainContent = () => {
  return (
    <MainContentContainer>
      <CreatePost />
      <PostList />
    </MainContentContainer>
  );
};

export default MainContent;
