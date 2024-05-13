import "./index.css";
import Header from "./Components/Header";
import NavAside from "./Components/NavAside";

function App() {
  return (
    <>
    <div className="container h-full max-w-full grid grid-cols-[repeat(2,_auto)] grid-rows-[60px,_auto]">
      <Header />
      <NavAside />
      <main>
        
      </main>
    </div>
    </>
  );
}

export default App;
