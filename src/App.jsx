import Header from "./components/Header";
import Aside from "./components/Aside";
import UserProfilePage from "./components/UserProfilePage";
import Dashboard from "./components/Dashboard";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import SelectedPostPage from "./components/SelectedPostPage";
import { useState } from "react";

function App() {
  const [reloadPostList, setReloadPostList] = useState(true);
  const [reloadComments, setReloadComments] = useState(true);

  const mockLoggedInUserId = 1;

  return (
    <>
      <Header mockLoggedInUserId={mockLoggedInUserId} />

      <Aside />
      <Routes>
        <Route
          path="/"
          element={
            <Dashboard
              mockLoggedInUserId={mockLoggedInUserId}
              setReloadPostList={setReloadPostList}
              reloadPostList={reloadPostList}
              setReloadComments={setReloadComments}
              reloadComments={reloadComments}
            />
          }
        />
        <Route
          path="/post/:id"
          element={
            <SelectedPostPage
              mockLoggedInUserId={mockLoggedInUserId}
              setReloadPostList={setReloadPostList}
              reloadPostList={reloadPostList}
              setReloadComments={setReloadComments}
              reloadComments={reloadComments}
            />
          }
        />
        <Route
          path="/profile/:id"
          element={<UserProfilePage />}
        />
      </Routes>  
    </>
  );
}

export default App;
