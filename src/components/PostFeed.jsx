import { useContext } from "react";
import { PostContext } from "./PostContext";
import Post from "./Post";

function PostFeed() {
	const { posts } = useContext(PostContext);

	return (
		<div className="postfeed">
			{posts
				.slice()
				.reverse()
				.map((post) => (
					<Post
						key={post.id}
						post={post}
					/>
				))}
		</div>
	);
}

export default PostFeed;
