/* eslint-disable react/prop-types */
import FeedItem from './FeedItem'
import Comment from './Comment'

export default function Feed({ posts, users, currentUser, handleComment }) {
  return (
    <div className="postList">
      {posts.slice().reverse().map((post) => (
        <div key={post.id} className="feedItemWrapper">
          <FeedItem post={post} users={users} />
          <Comment currentUser={currentUser} post={post} handleComment={handleComment} />
        </div>
      ))}
    </div>
  )
}