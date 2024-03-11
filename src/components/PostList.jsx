import CreatePost from './CreatePost';
import PostListItem from './PostListItem'; 

export default function PostList(props) {
    const { posts, setPosts, setDataFetched } = props;
    
    return (
        <main className="main">
            <CreatePost setDataFetched={setDataFetched}/>
            {posts && posts.length > 0 ? (
                posts.map((post) => (
                    <PostListItem key={post.id} post={post} setDataFetched={setDataFetched} posts={posts} setPosts={setPosts}/>
                ))
            ) : (
                <p>No posts available</p>
            )}
        </main>
    );
}
