import PostItem from "./PostItem";

const PostsList = ({ user, posts, getPosts }) => {
    return (
        <div className="postsList">
            {posts.map((post, index) => (
                <PostItem
                    key={index}
                    post={post}
                    user={user}
                    getPosts={getPosts}
                />
            ))}
        </div>
    );
};

export default PostsList;
