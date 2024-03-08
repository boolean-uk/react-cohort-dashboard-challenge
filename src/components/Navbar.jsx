import React from "react";
import { MdHomeFilled } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
function Navbar() {
  return (
    <nav className="sidebar">
      <div className="sidebar-icon">
        <button>
          <MdHomeFilled size={"2rem"} />
        </button>
      </div>
      <div className="sidebar-icon">
        <button >
          <RxAvatar size={"2rem"} />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
