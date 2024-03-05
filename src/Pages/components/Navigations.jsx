import { Link } from "react-router-dom";

export default function Navigations() {
  return (
    <div className="navegation">
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
    </div>
  );
}
