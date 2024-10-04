import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostFeed from "./components/PostFeed";
import PostDetails from "./components/PostDetails";
import Header from "./components/Header.jsx";
import NavBar from "./components/Navbar.jsx";
import NewPostForm from "./components/NewPostForm";
import { PostProvider } from "./components/PostContext";

function App() {
	return (
		<PostProvider>
			<BrowserRouter>
				<Header />
				<NavBar />
				<NewPostForm />
				<Routes>
					<Route
						path="/"
						element={<PostFeed />}
					/>
					<Route
						path="/posts/:id"
						element={<PostDetails />}
					/>
				</Routes>
			</BrowserRouter>
		</PostProvider>
	);
}

export default App;