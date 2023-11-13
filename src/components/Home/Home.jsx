import Header from "../../components/Header/Header";
import NavBar from "../../components/Nav-bar/NavBar";
import Main from "../../components/Main/Main";

function Home() {

  return (
    <div className="container">
      <Header></Header>
      <div className="container-main">
        <NavBar></NavBar>
        <Main></Main>
      </div>
    </div>
  )
}

export default Home;
