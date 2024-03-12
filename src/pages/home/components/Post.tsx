import React, { useState, useEffect, useContext } from 'react';
import './styles/post.css';
import PosterHeader from './PostHeader';
import AddComment from './AddComment';
import Comments from './Comments';
import { Post, Comment, UserContextType, Contact, PostsContextType } from '../../../types';
import { URLS } from '../../../utils/URLS';
import { PostsContext, UserContext } from '../../../App';
import { useParams } from 'react-router-dom';

const PostComponent = ({ post: postProp }: {post?: Post}) => {
  const { users } = useContext(UserContext) as UserContextType;
  const { posts } = useContext(PostsContext) as PostsContextType;
  const { id } = useParams();
  const [comments, setComments] = useState<Array<Comment>>([]);
  const [post, setPost] = useState<Post | undefined>(postProp);
  const [user, setUser] = useState<Contact | undefined>(undefined);

  useEffect(() => {
    if (post) {
      fetch(`${URLS.POSTS}/${post.id}/comment`)
      .then((response) => response.json())
      .then(setComments)
    }
  }, [post, id])

  useEffect(() => {
    if (!post) {
      setPost(posts.find(p => p.id.toString() === id));
    }
  }, [posts, id])

  useEffect(() => {
    setUser(users.find(u => u.id === post?.contactId));
  }, [users, post])

  return (
    <div className='post-container'>
      {post && (
        <>
          <PosterHeader user={user} post={post} />
          <p>{post?.content}</p>
          <div className='divider' />
          <Comments comments={comments} />
          <AddComment setComments={setComments} postId={post.id as number} />
        </>
      )}
    </div>
  );
};

export default PostComponent;