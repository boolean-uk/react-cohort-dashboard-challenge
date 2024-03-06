import Header from "./Header";
import SideBar from "./SideBar";
import Profile from "./Profile";
import Posts from "./Posts";
import PropTypes from "prop-types";
import { useContext } from "react";
import { AppContext } from "../App";

function Dashboard() {
  const context = useContext(AppContext);

  console.log("user: ", context.user);

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
                {context.viewProfile ? (
                  <Profile></Profile>
                ) : (
                  <Posts
                    posts={context.posts}
                    setPosts={context.setPosts}
                    contacts={context.contacts}
                    findPost={context.findPost}
                  ></Posts>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

Dashboard.propTypes = {
  posts: PropTypes.array,
  setPosts: PropTypes.func,
  contacts: PropTypes.array,
  findPost: PropTypes.func,
};

export default Dashboard;
