import PostForm from './PostForm';
import PostFeed from './PostFeed';
import Header from './Header';
import Navbar from './Navbar';

export default function Home() {
	return (
		<>
			<div className="main-content">
				<Header />
				<div className="content">
					<Navbar />

					<main>
						<PostForm />
						<PostFeed />
					</main>
				</div>
			</div>
		</>
	);
}
