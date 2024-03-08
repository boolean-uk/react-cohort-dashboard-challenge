import React, { useContext } from 'react';
import { PostContext } from '../App';
import Post from './Post'
import styled from 'styled-components';

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`


const PostList = () => {
  const {posts = [], setPosts} = useContext(PostContext)

  return (
    <ListContainer>
      {posts.toReversed().map((post, index) => {
        return <Post post={post} key={index}/>
      })}
    </ListContainer>
  );
}

export default PostList;
