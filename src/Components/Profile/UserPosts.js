import { Link } from "react-router-dom";

function UserPosts(props) {
    const { userPosts } = props;
    return (
        <div className="posts">
            <h2>Posts</h2>
            <ul className="post-list">
                {userPosts.map((post, index) => (
                    <li key={index}>
                        <Link
                            to={`/view/post/${post.id}`}
                            state={{
                                data: { currentPost: post },
                            }}
                            style={{ textDecoration: "none" }}
                        >
                            <div class="post-title">{post.title}</div>
                        </Link>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UserPosts;
