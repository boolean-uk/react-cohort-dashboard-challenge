import Header from "@components/Header/Header.jsx";
import Navbar from "@components/Navbar/Navbar.jsx";
import { useQuery } from "react-query";
import { Outlet } from "react-router-dom";
import { getContact } from "@services/PostService";
import { createContext } from "react";

export const UserContext = createContext(null);

export default function Root() {
  const {
    isLoading,
    error,
    data: currentUser,
  } = useQuery(["getCurrentUser"], () => getContact(1));

  return (
    <>
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>{error.message}</h1>}
      {currentUser && (
        <>
          <UserContext.Provider value={currentUser}>
            <Header />
            <Navbar />
            <Outlet />
          </UserContext.Provider>
        </>
      )}
    </>
  );
}
