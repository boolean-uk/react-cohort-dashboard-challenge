import { Link } from "react-router-dom";
import { useContext } from "react";

import logo from "../assets/header-logo.svg";
import {MainContext} from '../App'

import '../styles/Header.css'




export default function Header() {
  const { user } = useContext(MainContext);
  const initials = user && user.firstName && user.lastName ? `${user.firstName[0]}${user.lastName[0]}` : '';

  return (
    <>
      <header>
        <Link to="/">
          <h1>
            <img className="mx-3 my-5" height={42} src={logo} />
          </h1>
        </Link>
        <p>
        <Link
            to={`/profile/${user.id}`}
            className="userCycle"
        >
            <span className="userCycle__text">{initials}</span>
        </Link>
        </p>
      </header>
    </>
  );
}