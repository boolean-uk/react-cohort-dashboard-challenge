import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import './Mypost.css'
function MyPost() {
  const [personalData, setPersonalData] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state && location.state.result) {
      setPersonalData(location.state.result);
    }
  }, [location]);

  const backgroundColor = personalData ? personalData.color : "";

  return (
    <>
      <section className="personal-post">
        <div className="personal-post-header">
          <p
            className="post-initial"
            onClick={() => navigate(-1)}
            style={{ background: backgroundColor }}
          >
            {personalData?.initial}
          </p>
          <div className="poster-content">
            <p
              onClick={() => navigate(-1)}
            >{`${personalData?.firstName} ${personalData?.lastName}`}</p>
            <p>{personalData?.title}</p>
          </div>
        </div>
        <p>{personalData?.content}</p>
      </section>
    </>
  );
}

export default MyPost;