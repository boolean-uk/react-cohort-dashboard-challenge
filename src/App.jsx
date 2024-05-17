 import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Main from "./components/Main";
import UserProfilePage from "./components/UserProfilePage";
import { UsersProvider } from "./context/UsersContext";
import { PostsProvider } from "./context/PostsContext";
// export const CurrentUser = createContext();

function App() {
  return (
    <>
        <PostsProvider>
      <UsersProvider>
          <header>
            <Header />
          </header>
          <div className="grid grid-cols-[180px,_1fr] ">
            <nav>
              <SideBar />
            </nav>
            <main className="">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/user/:id" element={<UserProfilePage />} />
      </Routes>
             
            </main>
          </div>
      </UsersProvider>
        </PostsProvider>

    </>
  );
}

export default App;

// const [currUser, setCurrUser] = useState();

// // useEffect(() => {
// //   fetch("https://boolean-api-server.fly.dev/PerikK/contact/1")
// //     .then((response) => response.json())
// //     .then(setCurrUser);
// // }, []);
// // console.log('curU',currUser);
