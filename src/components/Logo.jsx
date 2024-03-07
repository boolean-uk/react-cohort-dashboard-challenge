import { useNavigate } from "react-router-dom";
import header from "../assets/header.svg";
import "../styles/Logo.css";
export default function Logo() {
    const navigate = useNavigate();
    return (
        <img src={header} alt="header image" className="logoimg" onClick={() => navigate("/")} />
    )
}