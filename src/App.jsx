import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import PostPage from "./components/post/PostPage";

function App() {
    return (
        <div className="app">
            <Layout>
                <Routes>
                    <Route path="/" element={<PostPage />} />
                    <Route path="/detail/:id" element={<h1>DetailPage!</h1>} />
                </Routes>
            </Layout>
        </div>
    );
}

export default App;
