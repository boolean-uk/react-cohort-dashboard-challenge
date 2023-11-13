import { contactProps } from "@utilities/propTypeDefs";
import { Link } from "react-router-dom";

//TODO: Would like to map over these them svg like my plan said I would...

export default function SideMenu({ user }) {
  return (
    <nav className="app-menu bg-cohort-bg-highlight">
      <ul className="flex flex-col place-content-center place-items-center">
        <li className="w-full">
          <Link
            to="/"
            className="flex flex-col items-center gap-2 p-4 hover:bg-cohort-green"
          >
            <svg
              width="33"
              height="36"
              viewBox="0 0 33 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.5 36V12L16.6 0L32.5 12V36H20.8V21.75H12.15V36H0.5Z"
                fill="#64648C"
              />
            </svg>
            <div>Home</div>
          </Link>
        </li>
        <li className="w-full">
          <Link
            to={`/profile/${user.id}`}
            className="flex flex-col items-center gap-2 p-4 hover:bg-cohort-green"
          >
            <svg
              width="41"
              height="40"
              viewBox="0 0 41 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#64648C"
                d="M7.6 31.25C9.7 29.7833 11.7833 28.6583 13.85 27.875C15.9167 27.0917 18.1333 26.7 20.5 26.7C22.8667 26.7 25.0917 27.0917 27.175 27.875C29.2583 28.6583 31.35 29.7833 33.45 31.25C34.9167 29.45 35.9583 27.6333 36.575 25.8C37.1917 23.9667 37.5 22.0333 37.5 20C37.5 15.1667 35.875 11.125 32.625 7.875C29.375 4.625 25.3333 3 20.5 3C15.6667 3 11.625 4.625 8.375 7.875C5.125 11.125 3.5 15.1667 3.5 20C3.5 22.0333 3.81667 23.9667 4.45 25.8C5.08333 27.6333 6.13333 29.45 7.6 31.25ZM20.5 21.5C18.5667 21.5 16.9417 20.8417 15.625 19.525C14.3083 18.2083 13.65 16.5833 13.65 14.65C13.65 12.7167 14.3083 11.0917 15.625 9.775C16.9417 8.45833 18.5667 7.8 20.5 7.8C22.4333 7.8 24.0583 8.45833 25.375 9.775C26.6917 11.0917 27.35 12.7167 27.35 14.65C27.35 16.5833 26.6917 18.2083 25.375 19.525C24.0583 20.8417 22.4333 21.5 20.5 21.5ZM20.5 40C17.7667 40 15.1833 39.475 12.75 38.425C10.3167 37.375 8.19167 35.9417 6.375 34.125C4.55833 32.3083 3.125 30.1833 2.075 27.75C1.025 25.3167 0.5 22.7333 0.5 20C0.5 17.2333 1.025 14.6417 2.075 12.225C3.125 9.80833 4.55833 7.69167 6.375 5.875C8.19167 4.05833 10.3167 2.625 12.75 1.575C15.1833 0.525 17.7667 0 20.5 0C23.2667 0 25.8583 0.525 28.275 1.575C30.6917 2.625 32.8083 4.05833 34.625 5.875C36.4417 7.69167 37.875 9.80833 38.925 12.225C39.975 14.6417 40.5 17.2333 40.5 20C40.5 22.7333 39.975 25.3167 38.925 27.75C37.875 30.1833 36.4417 32.3083 34.625 34.125C32.8083 35.9417 30.6917 37.375 28.275 38.425C25.8583 39.475 23.2667 40 20.5 40ZM20.5 37C22.3333 37 24.125 36.7333 25.875 36.2C27.625 35.6667 29.35 34.7333 31.05 33.4C29.35 32.2 27.6167 31.2833 25.85 30.65C24.0833 30.0167 22.3 29.7 20.5 29.7C18.7 29.7 16.9167 30.0167 15.15 30.65C13.3833 31.2833 11.65 32.2 9.95 33.4C11.65 34.7333 13.375 35.6667 15.125 36.2C16.875 36.7333 18.6667 37 20.5 37ZM20.5 18.5C21.6333 18.5 22.5583 18.1417 23.275 17.425C23.9917 16.7083 24.35 15.7833 24.35 14.65C24.35 13.5167 23.9917 12.5917 23.275 11.875C22.5583 11.1583 21.6333 10.8 20.5 10.8C19.3667 10.8 18.4417 11.1583 17.725 11.875C17.0083 12.5917 16.65 13.5167 16.65 14.65C16.65 15.7833 17.0083 16.7083 17.725 17.425C18.4417 18.1417 19.3667 18.5 20.5 18.5Z"
              />
            </svg>
            <div>Profile</div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

SideMenu.propTypes = {
  user: contactProps,
};
