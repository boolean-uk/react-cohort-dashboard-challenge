import './styles/app.css'
import Header from './components/Header.js'
import LeftMenu from './components/LeftMenu';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="app">
      <Header />
      <LeftMenu />

      {/* <TODO: use routing to choose between Dashboard and Profile Page below */}
      <Dashboard />
    </div>
  );
}

export default App;
