
const Post = ({posts}) => {


  return (  
    <>
    {posts.map(post => (
      <li>
        {post.content}
      </li>
    )) }
    </>
  );
}

export default  Post;