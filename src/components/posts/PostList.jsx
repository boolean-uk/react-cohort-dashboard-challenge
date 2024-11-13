import PostItem from "./PostItem";

function PostList({ posts }) {
return (
    <div>
        {posts.slice().reverse().map((post) => (
            <PostItem key={post.id} post={post} />
        ))}
    </div>
);
}

export default PostList;