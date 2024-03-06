import { useState } from 'react'

import './App.css'

function App() {
  return (
    <>
      <head>
        <link rel="stylesheet" href="index.css" />
      </head>
      <body>
        <div className="container">
          <header className="header blue">Header</header>
          <div className="container-nav-main">
            <nav className="sidebar red">Sidebar</nav>
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

    </>
  )
}

export default App
