import Header from "./Header";
import SideBar from "./SideBar";
import Posts from "./Posts";
import PropTypes from "prop-types";

function Dashboard({ posts, setPosts, contacts, findPost }) {
  return (
    <div className="dashboard">
      <Header></Header>
      <div>
        <div className="container">
          <div className="container-nav-main">
            <SideBar></SideBar>
            <Posts
              posts={posts}
              setPosts={setPosts}
              contacts={contacts}
              findPost={findPost}
            ></Posts>
          </div>
        </div>
      </div>
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
