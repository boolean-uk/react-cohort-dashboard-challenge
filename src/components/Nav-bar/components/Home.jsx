import homeIcon from "../../../assets/home-icon.svg";

function Home() {
  return (
    <div className="nav-icon">
      <img className="nav-icon--img" src={homeIcon} alt="home-icon" />
      <p className="nav-icon--text">Home</p>
    </div>
  );
}

export default Home;
