//import titleHeader from "./assets/titleHeader.svg"

import { Link } from "react-router-dom";
function Header() {
    return (
        <header className="header">

            <div className="headerLogo">
                <h1>Cohort Manager</h1>
            </div>


            <Link to='/profile'>          
              <div className="headerProfile">
                <h2>Fk</h2>
              </div>

            </Link>


        </header>





    )
}
export default Header;