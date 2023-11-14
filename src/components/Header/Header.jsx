import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header>
        <Link to="/">
          <h1>
            <i className="fa-solid fa-pen-nib"></i> Cohort Manager
          </h1>
        </Link>
        <p>LC</p>
      </header>
    </>
  );
}
