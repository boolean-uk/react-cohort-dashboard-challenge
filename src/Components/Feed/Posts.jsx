import PostCard from "./PostCard";

function Posts({posts}) {

    return (
        <section className="posts-container">
            {posts.map((post) =>
            <PostCard key={post.id} post={post}/>
        )}
        </section>
    )
}
export default Posts