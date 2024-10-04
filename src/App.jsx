import { useEffect, useState } from 'react';
import './styles/App.css';
import Home from './Components/Home';
import ContextProvider from './Components/ContextProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ViewProfile from './Components/ViewProfile';
import ViewPost from './Components/ViewPost';

function App() {
	const [postData, setPostData] = useState([]);
	const [user, setUser] = useState(null);
	const apiURL = 'https://boolean-uk-api-server.fly.dev/johnfa1508/post/';
	const fetchData = async () => {
		const response = await fetch(apiURL);
		const jsonData = await response.json();

		setPostData(jsonData);
	};

	useEffect(() => {
		const fetchUser = async () => {
			const response = await fetch(
				'https://boolean-uk-api-server.fly.dev/johnfa1508/contact/1'
			);
			const jsonData = await response.json();

			setUser(jsonData);
		};

		fetchUser();
	}, []);

	return (
		<>
			<ContextProvider
				user={user}
				setUser={setUser}
				postData={postData}
				setPostData={setPostData}
				fetchData={fetchData}
			>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/view/profile/:id" element={<ViewProfile />} />
						<Route path="/view/post/:id" element={<ViewPost />} />
					</Routes>
				</BrowserRouter>
			</ContextProvider>
		</>
	);
}

export default App;
