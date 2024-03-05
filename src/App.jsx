import "./App.css";
import { LeftMenu } from "./components/LeftMenu";
import { HeaderBar } from "./components/HeaderBar";
import { Navigate, Route, Routes } from "react-router-dom";
import { PostsListPage } from "./components/Main/PostsListPage";
import { NotFoundPage } from "./components/NotFoundPage";
import { createContext } from "react";

export const UserContext = createContext();

function App() {
	const loggedInUser = {
		firstName: "Gianni",
		lastName: "Homenick",
		gender: "Two-spirit",
		email: "Lenora.Nitzsche@gmail.com",
		jobTitle: "Principal Configuration Technician",
		street: "Meredith Lake",
		city: "Clementinastad",
		latitude: -62.1199,
		longitude: 18.7978,
		favouriteColour: "#caadcc",
		profileImage:
			"https://www.gravatar.com/avatar/Lenora.Nitzsche@gmail.com?s=120&d=identicon",
		id: 1,
	};
	return (
		<body>
			<div className="container">
				<UserContext.Provider value={loggedInUser}>
					<HeaderBar />
					<div className="container-nav-main">
						<LeftMenu />
						<Routes>
							<Route path="/" element={<Navigate to={"/posts"} />} />
							<Route path="/posts" element={<PostsListPage />} />
							<Route path="*" element={<NotFoundPage />} />
						</Routes>
					</div>
				</UserContext.Provider>
			</div>
		</body>
	);
}

export default App;
