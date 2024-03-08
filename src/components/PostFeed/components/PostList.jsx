import PostItem from "./PostItem"
import PropTypes from "prop-types"
import { useContext } from "react";
import { PostContext } from "../../../App";

function PostList() {
  const { posts } = useContext(PostContext);
  const reversedPosts = [...posts].reverse()
  console.log(posts)
  return (
    <div>
        {reversedPosts.map((post) => 
        <PostItem post={post} key={post.id}></PostItem>
        )}
    </div>
  )
}

PostList.propTypes = {

  posts: PropTypes.array

}


export default PostList