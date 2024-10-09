import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Post from './Post';

function SinglePostPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://boolean-uk-api-server.fly.dev/agrmet/post/${id}`)
    .then((rs) => rs.json())
    .then(setPost);
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return <Post post={post} />;
}

export default SinglePostPage;
