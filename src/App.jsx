import Index from './components/Index';

import Header from './components/Header/Header'
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

export default function App() {

  return (
    <>
    <Index/>
    {/*
    <Router>
    <Routes>
        <Route path="/" element={<Header/>}></Route>                
        <Route path="/" element={<Sidebar/>}></Route>
    </Routes>
    </Router>
  */}
    </>
  )
}