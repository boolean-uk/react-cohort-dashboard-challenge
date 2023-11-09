import { Routes, Route, Link } from "react-router-dom"
import Home from "./Components/Home";

function App() {

  return (
      <div>
        {/* <Link to='/home'>Home</Link> */}
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
  )
}

export default App;

