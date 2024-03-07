/* eslint-disable react/prop-types */
import './style/CircleAvatar.css'; 

const CircleAvatar = ({ backgroundColor, initials }) => {
  return (
    <div className="circle-avatar" style={{ backgroundColor }}>
      <span className="initials">{initials}</span>
    </div>
  );
};

export default CircleAvatar;
