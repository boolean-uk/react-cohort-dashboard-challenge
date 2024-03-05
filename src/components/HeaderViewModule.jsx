import TitleHeader from "../assets/title_header_svg.svg";
import ProfileIcon from "../assets/profile_icon_svg.svg";
import "./HeaderViewModule.css";

function HeaderViewModule() {
  return (
    <>
      <section>
        <img src={TitleHeader} alt="Home Icon" />
        <img src={ProfileIcon} alt="Profile Icon" />
      </section>
    </>
  );
}

export default HeaderViewModule;
