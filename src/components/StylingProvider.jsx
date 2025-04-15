import "../styles/App.css";
import "../styles/Ui.css";
import "../styles/Icons.css";
import "../styles/Containers.css";
import "../styles/Content.css";
import { CurrentUserContext } from "./Contexts";

function StylingProvider({ currentUser, children }) {
  return (
    <CurrentUserContext.Provider value={{ currentUser }}>
      <div className="style">{children}</div>;
    </CurrentUserContext.Provider>
  );
}

export default StylingProvider;
