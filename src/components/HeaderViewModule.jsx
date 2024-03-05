import TitleHeader from "../assets/title_header_svg.svg";
import "./HeaderViewModule.css";

function HeaderViewModule() {
  return (
    <>
      <section>
        <img src={TitleHeader} alt="Home Icon" />
      </section>
    </>
  );
}

export default HeaderViewModule;
