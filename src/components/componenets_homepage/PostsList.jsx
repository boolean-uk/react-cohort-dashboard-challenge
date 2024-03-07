import PostsListItem from "./PostsListItem.jsx";
import PropTypes from "prop-types";

function PostsList(props) {
  const { postsList } = props;
  return (
    <ul>
      {postsList.map((post) => (
        <li key={post.id}>
          <PostsListItem post={post} />
        </li>
      ))}
    </ul>
  );
}

PostsList.propTypes = {
  postsList: PropTypes.array,
};

export default PostsList;
