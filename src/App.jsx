import "./App.css";

// components
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";

function App() {
    return (
        <div className="container">
            <Header />
            <Navigation />

            <HomePage />
        </div>
    );
}

export default App;
