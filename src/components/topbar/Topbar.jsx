// Topbar.jsx
import HeadLeftLogo from "./HeadLeftLogo";
import ProfileLogo from "./ProfileLogo"
import "./topbar.css";

const Topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="headerlogo" style={{display: 'inline-block', padding: '10px', borderRadius: '5px' }}>
          <HeadLeftLogo />
        </span>
      </div>
      <div className="topbarRight"style={{width:'40px',height:'40',borderRadius:'50%', color: 'white'}}>
        <ProfileLogo />
        
      </div>
    </div>
  );
};

export default Topbar;
