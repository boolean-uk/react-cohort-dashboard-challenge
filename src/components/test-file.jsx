import { useParams } from "react-router-dom";
import useUsers from "../hooks/useUsers";

export default function UserProfilePage() {
  const {users} = useUsers()
  const { id } = useParams()

  if (!users) {
      console.log('Usersssssssssss not found');
    return <p>Loading</p>;
  }

  console.log(users);
  const userToShow = users?.find(user => user.id === id);

  
  if (!userToShow) {
    console.log('User not found');
    return <p>User not found</p>; 
  }
  
  console.log(userToShow);

 
  return (
    <h1>{userToShow.firstName}</h1>
  )

}

  const [avatarClicked, setAvatarClicked] = useState(false)

    const handleAvatarClick = () => {
    
    setAvatarClicked(true);
};
  


import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
// import Main from "./components/Main";
import Avatar from "./components/Avatar";
import CreatePost from "./components/CreatePost";
import Posts from "./components/Posts";
import UserProfilePage from "./components/UserProfilePage";
import { UsersProvider } from "./context/UsersContext";
import { PostsProvider } from "./context/PostsContext";

function App() {
  const [avatarClicked, setAvatarClicked] = useState(false);

  const handleAvatarClick = () => {
    setAvatarClicked(true);
  };

  return (
    <>
      <UsersProvider>
        <header>
          <Header />
        </header>
        <PostsProvider>
          <div className="grid grid-cols-[180px,_1fr] ">
            <nav>
              <SideBar />
            </nav>
            <main>
              <div className="flex flex-col gap-3 m-3">
                {avatarClicked ? (
                  <UserProfilePage />
                ) : (
                  <>
                    <CreatePost />
                    <Posts />
                  </>
                )}
              </div>
              {/* <Main /> */}
            </main>
          </div>
        </PostsProvider>
      </UsersProvider>

      <Routes>
        <Route path="/" />
        <Route path="/user/:id" element={<UserProfilePage />} />
      </Routes>
    </>
  );
}

export default App;
