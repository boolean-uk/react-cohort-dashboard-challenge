import { createContext, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import LeftMenu from "./components/LeftMenu";

const MyContext = createContext();

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MyContext.Provider value={{ count, setCount }}>
        <Header />
        <LeftMenu />
        
      </MyContext.Provider>
    </>
  );
}

export default App;
