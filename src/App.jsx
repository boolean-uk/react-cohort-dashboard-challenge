import './App.css'
import NavigationMenu from '@/Components/NavigationMenu/NavigationMenu'
import Header from '@/Components/Header/Header'
import ContentView from '@/Components/ContentView/ContentView'
import { userContext } from '@/Utils/contexts'

const user = {
  firstName: "Alex",
  lastName: "Walker",
  favouriteColour: "Lightgreen"
}

function App() {

  return (
    <>
    <userContext.Provider
      value={{LoggedInUser: user}}
    >
      <Header />
      <NavigationMenu />
      <ContentView />
    </userContext.Provider>
    </>
  )
}

export default App
