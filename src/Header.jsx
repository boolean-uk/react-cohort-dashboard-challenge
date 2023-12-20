import "./header.css";
import mySvg from "./assets/header.svg";
const Header = ({ loggedInUser }) => {
  // console.log(loggedInUser);
  return (
    <header>
      <img src={mySvg} alt='' />
      <div className='initials'>
        {loggedInUser.firstName && loggedInUser.lastName && (
          <p>
            {loggedInUser.firstName[0]}
            {loggedInUser.lastName[0]}
          </p>
        )}
      </div>
    </header>
  );
};

export default Header;
