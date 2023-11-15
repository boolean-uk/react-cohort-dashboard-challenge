import Header from "../../components/Header/Header";
import NavBar from "../../components/Nav-bar/NavBar";
import Main from "../../components/Main/Main";

function Home({ posts, root, loggedInUser, shouldGetPost }) {
  if (!loggedInUser) return <p></p>;
  const loggedInUserInitials =
    loggedInUser.firstName[0] + loggedInUser.firstName[0];
  // console.log(loggedInUserInitials);

  return (
    <div className="container">
      <Header loggedInUserInitials={loggedInUserInitials}></Header>
      <div className="container-main">
        <NavBar></NavBar>
        <Main
          posts={posts}
          root={root}
          loggedInUserInitials={loggedInUserInitials}
          shouldGetPost={shouldGetPost}
          loggedInUser={loggedInUser}
        ></Main>
      </div>
    </div>
  );
}

export default Home;
