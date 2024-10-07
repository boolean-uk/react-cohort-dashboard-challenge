import ContentFeed from "../ContentFeed";
import Header from "../Header";
import LeftMenu from "../LeftMenu";

export default function HomePage() {
    return (
        <>
        <Header />
        <div className="main-body">
          <LeftMenu />
          <ContentFeed />
        </div>
        </>
    )
}