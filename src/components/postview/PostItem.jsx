import { useContext, useEffect, useState } from 'react'
import { AccountContext } from '../../app/App';
import PropTypes from 'prop-types';
import CommentList from './CommentList';
import AddComment from './AddComment';
import ProfileIcon from '../profile/ProfileIcon';
import { Link } from 'react-router-dom';


PostItem.propTypes = {
  post: PropTypes.object
};

function PostItem(props) {
    const { post } = props
    const { accounts } = useContext(AccountContext)
    const [account, setAccount] = useState('')
    
    useEffect( () => {
      setAccount(accounts.find((c) => (c.id === post.contactId)))
    },[post])
  

  return (
    <article className="post">

     { post && account && <div className="post-content"> 
      <div className='profile-items'> 

        <div className="profile-icon">
          <ProfileIcon user={account} />
        </div>
      
        <div className='profile-info'> 
          <h3> {`${account.firstName} ${account.lastName}`} </h3>
          <h4> 
              <Link className='view-link' 
                to={`/view/${post.id}`} 
                state={{post:post}} > 
                {post.title} 
              </Link>
          </h4>
        </div>

      </div>
      
        <p>{post.content}</p>
    </div>}

        <div className='comment-container'>
          {/* Comments here */}
          <CommentList post={post}/>

          {/* Add comment here */}
          <AddComment post={post}/>
        </div>
    </article>
  )
}

export default PostItem


