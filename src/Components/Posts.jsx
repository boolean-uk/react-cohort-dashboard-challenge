export default function PostsDisplay() {

const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://boolean-api-server.fly.dev/jdm1991/post')
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);


  return (
    <li key={posts.id} className='posts-section'>
        <div className='posts-title'>{posts.title}</div>
        <div className='posts-comment'>{posts.content}</div>
    </li>
  )
}