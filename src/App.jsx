import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import SpecificPost from "./SpecificPost";
import "./App.css";
import Header from "./Header";
import NavBar from "./NavBar";
import MainPage from "./MainPage";
function App() {
  // Posts and comments should show the initials of the author in a coloured circle.
  // Clicking a posts title (under the author name) should take the user to a separate route that shows only that post and all of its comments. You must use a route for this, not an array filter.
  const [loggedInUser, setLoggedInUser] = useState({});

  const getLoggedInUser = () => {
    fetch(`https://boolean-api-server.fly.dev/hamza789987/contact/1`).then(
      (res) => res.json().then((data) => setLoggedInUser(data))
    );
  };
  useEffect(getLoggedInUser, []);
  return (
    <div className='app'>
      <Header loggedInUser={loggedInUser} />
      <NavBar />
      <Routes>
        <Route path='/' element={<MainPage loggedInUser={loggedInUser} />} />

        <Route
          path='/specificPost/:id'
          element={<SpecificPost loggedInUser={loggedInUser} />}
        />
      </Routes>
    </div>
  );
}

export default App;
