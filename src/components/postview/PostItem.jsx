import { useContext, useEffect, useState } from 'react'
import { AccountContext } from '../../pages/DashBoard';
import PropTypes from 'prop-types';
import CommentList from './CommentList';
import AddComment from './AddComment';


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
        <div className="profile-icon">{account.profileImage && <img src={account.profileImage}/>}</div>
        <h4> {`${account.firstName} ${account.lastName}`} </h4>
        <h5> {post.title} </h5>
        <p>{post.content}</p>
      </div>}

        {/* Comments here */}
        <CommentList post={post}/>

        {/* Add comment here */}
        <AddComment post={post}/>

   

    </article>
  )
}

export default PostItem



// for comments:
// {tweet.article &&
//   <div className="tweet-article">
//       <img src={tweet.article.image} />
//       <small>{tweet.article.site}</small>
//       <h5>{tweet.article.title}</h5>
//       <p>{tweet.article.content}</p>
//   </div>
// }