import { CreatePost } from "./CreatePost";
import { Post } from "./Post";

export const PostsListPage = () => {
	return (
		<main>
			<CreatePost />
			<Post />
			<Post />
			<Post />
		</main>
	);
};
