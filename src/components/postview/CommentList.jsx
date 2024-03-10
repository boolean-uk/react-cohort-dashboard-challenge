import PropTypes from 'prop-types';
import { useContext, useEffect, useState } from 'react'
import { AccountContext } from '../../app/App';
import axios from 'axios';
import ProfileIcon from '../profile/ProfileIcon';

CommentList.propTypes = {
  post: PropTypes.object
};

function CommentList(props) {
  const { accounts } = useContext(AccountContext)
  const { post } = props;
  const url = `https://boolean-api-server.fly.dev/KantheeK/post/${post.id}/comment`
  
  const [ comments, setComment ] = useState([])

  const [displayedComments, setDisplayedComments] = useState([]);

  const [displayLimit, setDisplayLimit] = useState(3);

  
  const [showMoreClicked, setShowMoreClicked] = useState(false);  // controlling show less / show more

  // Fetcher to get comments for the post:
  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get(url);
            // console.log(response.data);
            setComment(response.data);
        } catch (error) {
            console.log(error)
        }
    }
    fetchData();

}, [url]);

  // Transferring comments to displayedComments
  useEffect(() => {
    if (comments && showMoreClicked) {
      setDisplayedComments(comments)
    }
    else
      {setDisplayedComments(comments.slice(0, displayLimit))
      }
  }, [displayLimit, comments, showMoreClicked]);

  function handleShowMore() {
    if (showMoreClicked) {
      setDisplayLimit(3);
    } else {
      setDisplayLimit(comments.length);
    }
    setShowMoreClicked(!showMoreClicked);
  }


  return (
    <div className="comments-container">
      <button onClick={handleShowMore}>{showMoreClicked ? 'Show less' : 'Show more'}</button>

      { displayedComments && (displayedComments.map((comment) => {
       const commenter = accounts.find((account) => account.id === comment.contactId);
        return (
          <article key={comment.id} className="comment-item">
            {/* Render comment content */}
            <div className="profile-icon">
              <ProfileIcon user={commenter} />
            </div>
            <div className="comment-content">{comment.content}</div>
          </article>
          )
        }
      ))}
    </div>
  )
}

export default CommentList
