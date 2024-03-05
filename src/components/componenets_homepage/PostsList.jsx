import PostsListItem from "./PostsListItem.jsx";

function PostsList(props) {
  console.log("in postLists");
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

export default PostsList;
