import { Link } from "react-router-dom";

export default function NavAside() {
    return (
        <nav className="flex flex-col w-28 h-full">
          <Link to={"/"}>
            <button className="p-7 grid place-items-center focus:bg-inputGrey">
              <img className="h-6 mb-2" src="/assets/home-icon-svg.svg" />
              <p className="text-cohortBlue font-medium">Home</p>
            </button>
          </Link>
          <Link to={"/profile/1"}>
            <button className="p-7 grid place-items-center w-max focus:bg-inputGrey">
              <img className="h-6 mb-2" src="/assets/profile-icon-svg.svg" />
              <p className="text-cohortBlue font-medium">Profile</p>
            </button>
          </Link>
        </nav>
      );
    }
