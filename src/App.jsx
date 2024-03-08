import { useState, useEffect, createContext } from "react";
import Header from "./Components/Header/index.jsx";
import Main from "./Components/Main/index.jsx";
import Login from "./Components/Login/index.jsx";
const MyContext = createContext();
const LoginContext = createContext();
function App() {
  //Set currentuser = null if localStorage is not saved(logged out)
  const [currentUser, setCurrentUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [newComment, setNewComment] = useState({ content: "" });

  //Set the loggedin user the the last logged in
  useEffect(() => {
    const loggedInId = localStorage.getItem("loggedInId");
    //If loggedInId exists, and users is set, find the user and set it as the logged in user
    if (loggedInId && users) {
      const foundUser = users.find(
        (userItem) => Number(userItem.id) === Number(loggedInId)
      );
      setCurrentUser(foundUser);
    }
  }, [users]);

  //Fetch users
  useEffect(() => {
    fetch(`https://boolean-api-server.fly.dev/knutsr0501/contact`)
      .then((response) => response.json())
      .then((item) => setUsers(item));
  }, []);

  //Fetch posts
  useEffect(() => {
    fetch(`https://boolean-api-server.fly.dev/knutsr0501/post`)
      .then((response) => response.json())
      .then((item) => setPosts(item.reverse()));
  }, [newComment]);
  console.log(currentUser);
  console.log(localStorage.getItem("loggedInId"));

  return (
    <div className="container">
      {currentUser ? (
        <MyContext.Provider
          value={{
            posts,
            setPosts,
            users,
            currentUser,
            setCurrentUser,
            newComment,
            setNewComment,
          }}
        >
          <Header />
          <Main />
        </MyContext.Provider>
      ) : (
        <LoginContext.Provider value={{ users, currentUser, setCurrentUser }}>
          <Login />
        </LoginContext.Provider>
      )}
    </div>
  );
}

export { App, MyContext, LoginContext };
