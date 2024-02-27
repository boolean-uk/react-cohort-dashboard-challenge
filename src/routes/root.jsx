import Header from "@components/Header/Header.jsx";
import Navbar from "@components/Navbar/Navbar.jsx";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <Header />
      <Navbar />
      <Outlet />
    </>
  );
}
