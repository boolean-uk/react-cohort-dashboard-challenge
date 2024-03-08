import PostListItem from './PostListItem.jsx'
import { useContext } from "react";
import { DataContext } from "../../../App";

function PostList() {
  const { posts, getContactById } = useContext(DataContext);

  return (
    <ul className='post-list-container'>
        {posts.map((post, index) => (
            <PostListItem key={index} post={post} user={getContactById(1)} contact={getContactById(post.contactId)}/>
        ))}
    </ul>
  );
}

export default PostList;
