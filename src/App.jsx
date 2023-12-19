import Header from "../src/header.jsx";
import LeftMenu from "../src/left-menu.jsx";
import "./App.css"
import { Route , Routes } from "react-router-dom";
import Home from "./index.jsx"
import PostPageSection from "./components/PagesectionPost/Pagesectionpost.jsx"
import Form from "../src/form.jsx"

const App = () => {
  
  return (
    <>
      <div className="app-Container">
        <Header></Header>
        <LeftMenu className="LeftMenu"></LeftMenu>
        <Routes >
          <Route path="/" element= {<Home/>}></Route>
          <Route path="/:postid/post" element= {<PostPageSection/>}></Route>
          <Route path= "/form" element = {<Form/>}></Route>
        </Routes>
      </div>
    </>
  );
};
export default App;
