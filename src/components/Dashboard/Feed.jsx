/* eslint-disable react/prop-types */
import FeedItem from './FeedItem'
import Comment from './Comment'

export default function Feed({ posts, users, currentUser }) {
  return (
    <div className="postList">
      {posts.map((post) => (
        <div key={post.id} className="feedItemWrapper">
          <FeedItem post={post} users={users} />
          <Comment currentUser={currentUser} />
        </div>
      ))}
    </div>
  );
}
