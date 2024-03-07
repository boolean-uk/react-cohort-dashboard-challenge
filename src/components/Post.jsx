import React, { useEffect, useContext } from 'react'
import { useState } from 'react'
import ProfilePicturePost from './profile/ProfilePicturePost'
import { AppContext } from '../App'

export default function Post( { post } ) {
  const [author, setAuthor] = useState({})
  const { title, content, contactId } = post
  const { posts } = useContext(AppContext)

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

  const initials = author.firstName && author.lastName ? `${author.firstName[0]}${author.lastName[0]}` : '??'
  const color = author.favouriteColour ? author.favouriteColour : 'black'
  return (
    <div className='post' onClick={() => console.log(post)}>
      <div className='post-author'>
        <ProfilePicturePost initials={initials} color={color} />
        <h3>{author.firstName} {author.lastName}</h3>
      </div>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  )
}
