// App.jsx
import './styles/App.css'; // Import the CSS file

import { Header } from './components/Header';
import { LeftMenu } from './components/LeftMenu';
import { Feed } from './components/Feed';

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <LeftMenu />
        <Feed />
      </div>
    </div>
  );
}

export default App;
