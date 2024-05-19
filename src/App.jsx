import { Routes, Route } from "react-router-dom"

import Header from "./components/Header"
import SideBar from "./components/SideBar"
import Main from "./components/Main"
import UserProfilePage from "./components/UserProfilePage"
import { UsersProvider } from "./context/UsersContext"
import { PostsProvider } from "./context/PostsContext"
import NewPost from "./components/NewPost"

function App() {
	return (
		<>
			<PostsProvider>
				<UsersProvider>
					<header className=''>
						<Header />
					</header>
					<div className='grid grid-cols-[180px,_1fr] '>
						<SideBar />
						<main className=''>
							<Routes>
								<Route path='/' element={<Main />} />
								<Route
									path='/user/:id'
									element={<UserProfilePage />}
								/>
								<Route path='/newPost' element={<NewPost />} />
							</Routes>
						</main>
					</div>
				</UsersProvider>
			</PostsProvider>
		</>
	)
}

export default App
