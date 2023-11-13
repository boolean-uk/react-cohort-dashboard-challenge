import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import SideMenu from "./components/SideMenu/SideMenu";
import Profile from "./components/Profile/Profile";

import api from "@utilities/api";
import PulseLoader from "@components/Loader/PulseLoader";

import "./App.css";
import PostItem from "@components/Home/components/PostFeed/PostItem/PostItem";

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
      <section className="app-main flex flex-col gap-4 bg-cohort-background p-6">
        <Routes>
          <Route path="/profile/:contactIdParam" element={<Profile />} />
          <Route path="/post/:postIdParam" element={<PostItem user={user} />} />
          <Route path="/" element={<Home user={user} />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
