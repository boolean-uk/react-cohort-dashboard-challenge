import React, { useEffect, useContext } from 'react'
import { useState } from 'react'
import ProfilePicturePost from '../profile/ProfilePicturePost'
import { AppContext } from '../../App'
import { useNavigate, useParams } from 'react-router-dom'
import CreateComment from '../comments/CreateComment'
import CommentsList from '../comments/CommentsList'

export default function PostDetails() {
  const [author, setAuthor] = useState({})
  const [comments, setComments] = useState([])
  const [post, setPost] = useState({})
  const { id } = useParams();
  

  const { title, content, contactId} = post

  const { posts } = useContext(AppContext)

  const navigate = useNavigate();

  useEffect( () => {
    const fetchData = async () => {
        try {
            const response = await fetch(`https://boolean-api-server.fly.dev/giarreh/contact/${contactId}`);
            const data = await response.json();
            setAuthor(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    fetchData();

}, [contactId, posts]);

useEffect(() => {
  const fetchData = async () => {
      try {
          // Fetch comments
          const commentResponse = await fetch(`https://boolean-api-server.fly.dev/giarreh/post/${id}/comment`);
          const commentData = await commentResponse.json();

          // Fetch post data
          const postResponse = await fetch(`https://boolean-api-server.fly.dev/giarreh/post/${id}`);
          const postData = await postResponse.json();

          // Update state with fetched data
          setComments(commentData);
          setPost(postData);
      } catch (error) {
          console.error('Error fetching data:', error);
      }
  };

  fetchData();
}, [id]);


  // Author of post
  const initials = author.firstName && author.lastName ? `${author.firstName[0]}${author.lastName[0]}` : '??'
  const color = author.favouriteColour ? author.favouriteColour : 'black'

  return (
    <div className='post'>
      <div className='post-author'>
        <ProfilePicturePost initials={initials} color={color} author={author} />
        <h3 onClick={() => navigate(`/profile/${author.id}`)}>{author.firstName} {author.lastName}</h3>
      </div>
      <div>
        <h3>{title}</h3>
        <p>{content}</p>
        <hr />
      </div>
      <CommentsList comments={comments} post={post} />
      <CreateComment post={post} />
    </div>
  )
}
