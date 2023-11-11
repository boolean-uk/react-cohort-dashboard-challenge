import HomeLogo from "../Navigation/HomeLogo.svg";

function Home() {
  return (
    <div className="home">
      <img src={HomeLogo} alt="home logo" />
      <p><strong>Home</strong></p>
    </div>
  );
}

export default Home
