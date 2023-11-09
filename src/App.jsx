import "./App.css";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import SideMenu from "./components/SideMenu/SideMenu";

function App() {
  return (
    <div className="app-container container mx-auto grid min-h-screen w-screen">
      <Header />
      <SideMenu />
      <Home />
    </div>
  );
}

export default App;
