import React, {useState, useContext, useEffect} from 'react'
import UserIcon from '../Icons/UserIcon'
import SendIcon from '../Icons/SendIcon';
import { DataContext } from '../../App'
import fetchData from '../../service/FetchData';
import PropTypes from "prop-types"

function CommentBar({setComments, postId}) {
    const genericComment = {
        "postId": postId,
        "content": "",
        "contactId": -1
    }

    const [commentData, setCommentData] = useState(genericComment)
    const dataContext = useContext(DataContext)
    const user = dataContext.user

    const handleInputChange = (e) => {
        setCommentData({ ...commentData, 'content': e.target.value })
    };

    const handleSubmit = async (e) => {
      console.log("Button pressed!")
      try {
        // Put the new post into the database, if API is available
        await fetch(`https://boolean-api-server.fly.dev/KonWritesCode/post/${postId}/comment`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(commentData)
        });
      } catch (error) {
        console.error('Error updating post:', error);
      }
      fetchData(`https://boolean-api-server.fly.dev/KonWritesCode/post/${postId}/comment`, setComments)
      // Clear
      setCommentData({...commentData, 'content': ""})
    };

    useEffect(() => {
        setCommentData({...commentData, contactId: user.id})
      }, [user]
    );
    useEffect(() => {
        setCommentData({...commentData, postId: postId})
      }, [postId]
    );

    return (
      <div className='comment-bar-container'>
          <UserIcon image={user?.profileImage} contactInitials={user?.firstName + ' ' + user?.lastName}/>
          <div className='comment-bar'>
            <input 
              className='comment-bar-input'
              onChange={(e) => handleInputChange(e, 'content')}
              placeholder="Add a comment..."
              value={commentData.content}
            />
            <button className='comment-bar-button' onClick={handleSubmit}>
              <SendIcon />
            </button>
          </div>
      </div>
    )
}

CommentBar.propTypes = { 
	postId: PropTypes.number.isRequired,
    setComments: PropTypes.func.isRequired,
}

export default CommentBar