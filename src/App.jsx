import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";

function App() {
    return (
        <div className="app">
            <Layout>
                <Routes>
                    <Route path="/" element={<h1>MainPage!</h1>} />
                    <Route path="/detail/:id" element={<h1>DetailPage!</h1>} />
                </Routes>
            </Layout>
        </div>
    );
}

export default App;
