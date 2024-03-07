import { useState, useEffect, createContext} from "react"
import { Route, Routes,} from 'react-router-dom';
import axios from 'axios'

import '../app/App.css'
import SideBar from "../layouts/SideBar";
import DashBoardContainer from "../layouts/DashBoardContainer";
import PostView from "../pages/PostView";
import Header from "../layouts/Header";

import { DashBoard } from "../pages/DashBoard";


// User context:
const UserContext = createContext();

function App() {
    const [user, setUser] = useState({});
    const url = `https://boolean-api-server.fly.dev/KantheeK/contact/1`

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
        fetchData();

    }, []);


  return (
    <div className="app">

        <UserContext.Provider value={{user}} >
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
                </Routes>
            </div>
        </UserContext.Provider>

    </div>
  )
}


export { App, UserContext }

