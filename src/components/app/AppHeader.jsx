import logoImg from "@/assets/logo.svg";

function AppHeader() {
  return (
    <div className="app-header">
      <img src={logoImg} id="logo"></img>
    </div>
  );
}

export default AppHeader;
