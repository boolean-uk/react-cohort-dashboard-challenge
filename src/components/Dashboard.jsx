import Header from "./Header";
import SideBar from "./SideBar";
import Profile from "./Profile";
import Posts from "./Posts";
import { useContext } from "react";
import { AppContext } from "../App";

function Dashboard() {
  const context = useContext(AppContext);

  return (
    <div className="dashboard">
      {context.user === null ? (
        <div>
          <p>loading...</p>
        </div>
      ) : (
        <div>
          <Header></Header>
          <div>
            <div className="container">
              <div className="container-nav-main">
                <SideBar></SideBar>
                {context.viewProfile ? <Profile></Profile> : <Posts></Posts>}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
