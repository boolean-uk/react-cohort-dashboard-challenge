import UserControls from "./UserControls";
import Posts from "./Posts";
import PostContext from "./PostContext";
import { useContext } from "react";

function MainPage() {
  const { dataLoading, userLoading } = useContext(PostContext);
  return (
    <main id="page-main-area">
      {dataLoading || userLoading ? <p></p> : <UserControls />}
      {dataLoading || userLoading ? <p>Loading...</p> : <Posts />}
    </main>
  );
}

export default MainPage;
