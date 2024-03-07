import { CommentSecton } from '../../../styles/Feed/post/CommentSection/CommentSection';
import { ProfileImage } from '../../ProfileImage'
import '/src/styles/Feed/post/Post.css'

export const Post = ({post}) => {
    return (
      <div className="post-container">
        <div className="post-header">
            <ProfileImage />    {/* TODO: Set ProfileImage based on contact name*/}
          <div className="post-right-of-profile">
            <div className="post-user-name">
              <p>Username</p>
            </div>
            <div className='post-title'>
                <p>{post.title}</p>
            </div>
          </div>
        </div>
        <div className='post-content'>
            <p>{post.content}</p>
            <hr />
        </div>
        <CommentSecton />
      </div>
    );
}