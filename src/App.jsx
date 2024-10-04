import { useContext } from "react";
import "./App.css";
import { CohortAppContext } from "./context";
import BounceLoader from "react-spinners/BounceLoader";
import Header from "./components/header/Header";
import LeftMenu from "./components/menu/LeftMenu";
import styled from "styled-components";
import MainContent from "./components/mainContent/MainContent";
import { Route, Routes } from "react-router-dom";
import PostDetail from "./components/mainContent/PostDetail";
import UserProfile from "./components/userProfile/UserProfile";

const AppContainer = styled.div`
  display: grid;
  grid-template-areas:
    "header header"
    "menu main";
  grid-template-columns: 110px 1fr;
  grid-template-rows: 80px 1fr;
  height: 100vh;
`;

const HeaderContainer = styled.header`
  grid-area: header;
`;

const MenuContainer = styled.nav`
  grid-area: menu;
`;

const MainContainer = styled.main`
  grid-area: main;
  overflow-y: auto;
`;

function App() {
  const { loading } = useContext(CohortAppContext);

  if (loading) {
    return (
      <div className="spinner-container">
        <BounceLoader color="#3498db" loading={loading} size={100} />
      </div>
    );
  }

  return (
    <div className="App">
      <AppContainer>
        <HeaderContainer className="Header">
          <Header />
        </HeaderContainer>
        <MenuContainer className="Menu">
          <LeftMenu />
        </MenuContainer>
        <MainContainer className="Main">
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/post/:postId" element={<PostDetail />} />
            <Route path="/profile/:userId" element={<UserProfile />} />
          </Routes>
        </MainContainer>
      </AppContainer>
    </div>
  );
}

export default App;
