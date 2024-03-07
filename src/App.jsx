import "./App.css";
import { LeftMenu } from "./components/LeftMenu";
import { HeaderBar } from "./components/HeaderBar";
import { Navigate, Route, Routes } from "react-router-dom";
import { PostsListPage } from "./components/postCompontents/PostsListPage";
import { NotFoundPage } from "./components/NotFoundPage";
import { createContext, useEffect, useState } from "react";
import { getRequest } from "./utilites/apiRequests";
import { PostDetailPage } from "./components/postCompontents/PostDetailPage";
import { ProfilePage } from "./components/ProfilePage";
import { EditPostPage } from "./components/postCompontents/EditPostPage";
import { EditCommentPage } from "./components/postCompontents/EditCommentPage";

export const LoggedInUserContext = createContext();

function App() {
	const [loggedInUser, setLoggedInUser] = useState(null);

	useEffect(() => {
		getRequest("/contact/1").then((responseContact) => {
			setLoggedInUser(responseContact);
		});
	}, []);

	return !loggedInUser ? (
		<p>Logging in</p>
	) : (
		<body>
			<div className="container">
				<LoggedInUserContext.Provider value={loggedInUser}>
					<HeaderBar />
					<div className="container-nav-main">
						<LeftMenu />
						<Routes>
							<Route path="/" element={<Navigate to={"/posts"} />} />
							<Route path="/posts" element={<PostsListPage />} />
							<Route path="/posts/:postId" element={<PostDetailPage />} />
							<Route path="/posts/:postId/edit" element={<EditPostPage />} />
							<Route
								path="/posts/:postId/comments/:commentId/edit"
								element={<EditCommentPage />}
							/>
							<Route path="/profile/:userId" element={<ProfilePage />} />
							<Route path="*" element={<NotFoundPage />} />
						</Routes>
					</div>
				</LoggedInUserContext.Provider>
			</div>
		</body>
	);
}

export default App;
