import Header from "./components/Header/Header";
import NavBar from "./components/Nav-bar/NavBar";
import Main from "./components/Main/Main";

import "./App.css";

function App() {
  return (
    <div className="container">
      <Header></Header>
      <div className="container-main">
        <NavBar></NavBar>
        <Main></Main>
      </div>
    </div>
  );
}

export default App;
