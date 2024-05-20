import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import SideBar from "./components/SideBar"
import Main from "./components/Main"
import UserProfilePage from "./components/UserProfilePage"
import { UsersProvider } from "./context/UsersContext"
import { PostsProvider } from "./context/PostsContext"

function App() {
	return (
		<PostsProvider>
			<UsersProvider>
				<div className='h-screen flex flex-col'>
					<header className='w-full'>
						<Header />
					</header>
					<div className='flex flex-grow overflow-hidden'>
						<div className='w-[180px] flex-shrink-0'>
							<SideBar />
						</div>
						<main className='flex-grow overflow-auto'>
							<Routes>
								<Route path='/' element={<Main />} />
								<Route
									path='/user/:id'
									element={<UserProfilePage />}
								/>
							</Routes>
						</main>
					</div>
				</div>
			</UsersProvider>
		</PostsProvider>
	)
}

export default App
