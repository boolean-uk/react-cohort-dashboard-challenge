import Header from "../../components/Header/Header";
import NavBar from "../../components/Nav-bar/NavBar";
import Main from "../../components/Main/Main";
 

function Home({posts,root}) {

  return (
    <div className="container">
      <Header></Header>
      <div className="container-main">
        <NavBar></NavBar>
        <Main posts={posts} root={root}></Main>
      </div>
    </div>
  )
}

export default Home;
