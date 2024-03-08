import React from 'react';
import CreatePost from './CreatePost';
import PostList from './PostList';
import styled from 'styled-components';

const ComponentContainer = styled.div`
  display:flex;
  flex-direction:column;
  gap: 15px;
`
const PostComponent = () => {
  return (
    <ComponentContainer>
      <CreatePost/>
      <PostList/>
    </ComponentContainer>
  );
}

export default PostComponent;
