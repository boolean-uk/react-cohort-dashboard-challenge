import Header from './components/Header/header'
import Main from './components/Main/main'
import LeftMenu from './components/Left-menu/left-menu'
import './App.css'

function App() {

  return (
    <section className='main_grid'>
      <Header />
      <LeftMenu />
      <Main />
    </section>

  )
}

export default App
