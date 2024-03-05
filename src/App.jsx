import "./App.css";
import Header from "./components/Header";
import SideBar from "./components/Sidebar";
import Body from "./components/Body/Body";

function App() {
  return (
    <>
      <div className="box">
        <Header />
        <div className="box-nav-main">
          <SideBar />
          <Body />
        </div>
      </div>
    </>
  );
}

export default App;
