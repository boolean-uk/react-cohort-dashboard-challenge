import PostItem from "./PostItem";

const PostsList = ({ user, posts }) => {
    return (
        <div className="postsList">
            {posts.map((post, index) => (
                <PostItem key={index} post={post} user={user} />
            ))}
        </div>
    );
};

export default PostsList;
