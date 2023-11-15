import Header from "./Header/Header";
import Aside from "./Aside/Aside";
import UserProfilePage from "./UserProfileForm/UserProfilePage";
import Dashboard from "./Dashboard/Dashboard";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import SelectedPostPage from "./Dashboard/Dashboard_components/SelectedPostPage";
import { useState } from "react";


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
