export default function PostList(props) {
    const { posts } = props;
    
    return (
        <main className="main">
            {posts && posts.length > 0 ? (
                posts.map((post) => (
                    <div key={post.id} className="post">
                        <div className="name">
                            <strong>{post.firstName} {post.lastName}</strong>
                        </div>
                        <div>
                            <h2 className="title">{post.title}</h2>
                            <p className="content">{post.content}</p>
                        </div>
                    </div>
                ))
            ) : (
                <p>No posts available</p>
            )}
        </main>
    );
}
