import React, { useState, useContext, useEffect } from 'react'
import UserIcon from '../Icons/UserIcon'
import { DataContext } from '../../App';
import fetchData from '../../service/FetchData';


function CreatePost() {
    const genericPost = {
        "title": "Unknown Title",
        "content": "",
        "contactId": -1
      }
    const [postData, setPostData] = useState(genericPost)

    const dataContext = useContext(DataContext)
    const user = dataContext.user

    const handleInputChange = (e) => {
        setPostData({ ...postData, content: e.target.value })
    };

    const handleSubmit = async (e) => {
      try {
        // Put the new post into the database, if API is available
        await fetch('https://boolean-api-server.fly.dev/KonWritesCode/post', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(postData)
        });
      } catch (error) {
        console.error('Error updating post:', error);
      }
      fetchData('https://boolean-api-server.fly.dev/KonWritesCode/post', dataContext.setPosts)
      // Clear 
      setPostData({...postData, 'content': ""})
    };

    useEffect(() => {
        setPostData({...postData, contactId: user.id})
      }, [user]
    );

    return (
      <div className='post'>
          <UserIcon image={user?.profileImage} contactInitials={user?.firstName + ' ' + user?.lastName}/>
          <input 
            className='post-input' 
            onChange={(e) => handleInputChange(e, 'content')}
            placeholder="What's on your mind?"
           value={postData.content}/>
          <button className='post-submit-button' type="submit" onClick={handleSubmit}>Post</button>
      </div>
    )
}

export default CreatePost