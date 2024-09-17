import Header from "../components/HeaderComponents/Header.jsx";
import Navbar from "../components/NavbarComponents/Navbar.jsx";
import { useQuery } from "react-query";
import { Outlet } from "react-router-dom";
import { getContact } from "../services/PostService.js";
import { createContext } from "react";

export const UserContext = createContext(null);

export default function Root() {
  const {
    isLoading,
    error,
    data: currentUser,
  } = useQuery(["getCurrentUser"], () => getContact(1)); // The API didnt have anyone with id number 1...

  return (
    <>
      {isLoading && <h1>We're loading, hold on...</h1>}
      {error && <h1>{error.message}</h1>}
      {currentUser && (
        <>
          <UserContext.Provider value={currentUser}>
            <Header/>
            <Navbar />
            <Outlet />
          </UserContext.Provider>
        </>
      )}
    </>
  );
}