import "./App.css";
import { LeftMenu } from "./components/LeftMenu";
import { HeaderBar } from "./components/HeaderBar";
import { Navigate, Route, Routes } from "react-router-dom";
import { PostsListPage } from "./components/Main/PostsListPage";
import { NotFoundPage } from "./components/NotFoundPage";

function App() {
	return (
		<body>
			<div className="container">
				<HeaderBar />
				<div className="container-nav-main">
					<LeftMenu />
					<Routes>
						<Route path="/" element={<Navigate to={"/posts"} />} />
						<Route path="/posts" element={<PostsListPage />} />
						<Route path="*" element={<NotFoundPage />} />
					</Routes>
				</div>
			</div>
		</body>
	);
}

export default App;
