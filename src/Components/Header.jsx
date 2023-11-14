import Logo from "../assets/Logo.svg";

export default function Header () {

    return (
        <>
        <header className="header">
        <img className="logo" src={Logo} alt="Logo" />
        <h1>Cohort Manager</h1>
        <div className="user-badge">JM</div>
        </header>
      </>
    )



}