import Main from "./Components/Main/index.jsx";
import Login from "./Components/Login/index.jsx";
import { useContext } from "react";
import { MyContext } from "./App.jsx";

export default function MainOrLogin() {
  const { currentUser } = useContext(MyContext);
  return currentUser ? <Main /> : <Login />;
}
