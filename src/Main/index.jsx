import { Link, Route, Routes } from 'react-router-dom'
import './style.css'

function Main() {
    return(
        <div className="main">
        <Routes>
          <Route
            path="/"
            element={<>Home</>}
          />
          <Route
            path="/profile"
            element={<>Profile</>}
          />
        </Routes>
        </div>
    )
}

export default Main