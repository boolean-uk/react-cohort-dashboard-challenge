import Post from "./Post";
import "./posts.css";
import "./post.css";

function Posts(props) {
  const { contact, posts, contactId } = props;

  return (
    <div className="posts">
      <ul>
        {posts.map((post) => (
          <Post
            key={post.id}
            post={post}
            posts={posts}
            contact={contact}
            contactId={contactId}
          />
        ))}
      </ul>
    </div>
  );
}

export default Posts;
