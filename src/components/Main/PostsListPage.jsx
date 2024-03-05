import { useEffect, useState } from "react";
import { CreatePost } from "./CreatePost";
import { Post } from "./Post";
import { getRequest } from "../../utilites/apiRequests";

export const PostsListPage = () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		getRequest("https://boolean-api-server.fly.dev/LinusWillmont/post")
			.then((data) => {
				setPosts(data);
			})
			.catch((error) => console.error("Failed to get posts", error));
	}, []);

	return (
		<main>
			<CreatePost />
			{posts.map((post) => {
				return <Post key={post.id} post={post} />;
			})}
		</main>
	);
};
