import './style/dash.css'
import logo from './assets/title_header.svg';
import profile from './assets/profile-icon.svg';
import home from './assets/home-icon.svg';

function App() {

  return (
        <body>
          <div className="container">
            <header className="header blue">
              <div className='iconBox'>
                  <img src={logo}/>
              </div>
            
            </header>
            <div className="container-nav-main">
              <nav className="sidebar red">
                <ul>
                  <li>
                    <img src={profile}/>
                  </li>
                  <li>
                    <img src={home}/>
                  </li>
                </ul>
              </nav>
              <main className="main green">
                <div className="yellow"></div>
                <div className="yellow"></div>
                <div className="yellow"></div>
                <div className="yellow"></div>
                <div className="yellow"></div>
              </main>
            </div>
          </div>
        </body>
  )
}

export default App
