import './styles/app.css'
import Header from './components/Header.js'
import LeftMenu from './components/LeftMenu';
import Main from './components/Main';

function App() {
  return (
    <div className="app">
      <Header />
      <LeftMenu />
      <Main />
    </div>
  );
}

export default App;
