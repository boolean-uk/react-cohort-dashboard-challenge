import Header from "./components/Header";
import Aside from "./components/Aside";
import UserProfilePage from "./components/UserProfilePage";
import Dashboard from "./components/Dashboard";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import SelectedPostPage from "./components/SelectedPostPage";
import { useState,  useEffect } from "react";

function App() {
  const [reloadPostList, setReloadPostList] = useState(true);
  const [reloadComments, setReloadComments] = useState(true);
  const [reloadContacts, setReloadContacts] = useState(false)

  const mockLoggedInUserId = 1;
 
  return (
    <> 
      <Header mockLoggedInUserId={mockLoggedInUserId} key={reloadContacts}/> 
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
              reloadContacts={reloadContacts}
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
              reloadContacts={reloadContacts}
            />
          }
        />
        <Route
          path="/profile/:id"
          element={<UserProfilePage reloadContacts={reloadContacts} setReloadContacts={setReloadContacts} />}
        />
      </Routes>  
    </>
  );
}

export default App;
