import { useState, useEffect } from 'react';
import Header from '../Components/Header';
import Navbar from '../Components/Navbar';
import { useParams } from 'react-router-dom';
import Post from './Post';

export default function ViewPost() {
	const [post, setPost] = useState(null);
	const { id } = useParams();

	useEffect(() => {
		const fetchPost = async () => {
			const response = await fetch(
				`https://boolean-uk-api-server.fly.dev/johnfa1508/post/${id}`
			);
			const jsonData = await response.json();

			setPost(jsonData);
		};

		fetchPost();
	}, [id]);

	if (!post)
		return (
			<>
				<div>
					<p className="loading" style={{ color: 'black' }}>
						Loading...
					</p>
				</div>
			</>
		);

	return (
		<>
			<div className="main-content">
				<Header />
				<div className="content">
					<Navbar />

					<main>
						<Post post={post} />
					</main>
				</div>
			</div>
		</>
	);
}
