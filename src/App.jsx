import { useEffect, useState } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import SideMenu from "./components/SideMenu/SideMenu";

import api from "@utilities/api";
import PulseLoader from "@components/Loader/PulseLoader";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function getUser() {
      const fetch = await api.contact.get(1);
      setUser(await fetch);
    }
    getUser();
  }, []);

  if (!user) {
    return <PulseLoader />;
  }

  return (
    <div className="app-container container mx-auto grid min-h-screen w-screen text-cohort-blue">
      <Header user={user} />
      <SideMenu user={user} />
      <Home user={user}/>
    </div>
  );
}

export default App;
