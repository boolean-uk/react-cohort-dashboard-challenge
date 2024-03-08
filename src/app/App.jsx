import { useState, useEffect, createContext} from "react"
import { Route, Routes,} from 'react-router-dom';
import axios from 'axios'

import '../app/App.css'
import SideBar from "../layouts/SideBar";
import DashBoardContainer from "../layouts/DashBoardContainer";
import PostView from "../pages/PostView";
import Header from "../layouts/Header";
import Profile from "../pages/Profile";




// User context:
const UserContext = createContext();
const AccountContext = createContext();

function App() {
    const [user, setUser] = useState({});
    const [accounts, setAccount] = useState([])
    const url = `https://boolean-api-server.fly.dev/KantheeK/contact/1`
    const url2 = `https://boolean-api-server.fly.dev/KantheeK/contact`

    // Fetching data
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url);
                // console.log(response.data);
                setUser(response.data);
            } catch (error) {
                console.log(error)
            }
        }
        const fetchData2 = async () => {
            try {
                const response = await axios.get(url2);
                // console.log(response.data);
                setAccount(response.data);
            } catch (error) {
                console.log(error)
            }
        }

        fetchData();
        fetchData2();

    }, []);


  return (
    <div className="app">

      { user && accounts && <UserContext.Provider value={{user}} >
        <AccountContext.Provider value={{accounts, setAccount}} > 
            {/* Call layouts */}
            <div className="container">
                <Header className="Header" />
                <SideBar className="SideBar"/>
                {/* <DashBoardContainer /> */}

                {/* Setting up routes references: */}
                <Routes>
                {/* 1. Dashboard: */}
                    <Route 
                        path='/'
                        element={<DashBoardContainer />}
                        />
                    {/* 2. PostView*/}
                    <Route 
                        path='/view/:id'
                        element={<PostView/>}
                        />

                    {/* 3. Profile*/}
                    <Route 
                        path='/profile/:id'
                        element={<Profile/>}
                        />
                </Routes>
                
            </div>
            </AccountContext.Provider>
        </UserContext.Provider>}


    </div>
  )
}


export { App, UserContext,  AccountContext }

