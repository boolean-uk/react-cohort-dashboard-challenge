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
  const {posts, setPosts, isLoading} = useContext(PostContext)
  if(isLoading) {
    return (
      <ListContainer>
        {posts && posts.toReversed().map((post, index) => {
          return <Post post={post} key={index}/>
        })}
      </ListContainer>
    );

  }
}

export default PostList;
