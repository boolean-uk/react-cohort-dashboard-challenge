import Post from './Post';
import { useEffect, useContext } from 'react';
import { PostContext } from '../context';

export default function PostFeed() {
	const { postData, setPostData, fetchData } = useContext(PostContext);

	useEffect(() => {
		fetchData();
	}, [fetchData, setPostData]);

	return (
		<>
			<section>
				{postData
					.slice()
					.reverse()
					.map((post) => (
						<Post post={post} key={post.id} />
					))}
			</section>
		</>
	);
}
