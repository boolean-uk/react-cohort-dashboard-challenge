import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";

function MyPost() {
  const [personalData, setPersonalData] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setPersonalData(location.state.result);
  }, [location]);

  return (
    <div>
      <p>This is for the personal posts and comment</p>
      <p>{personalData?.firstName}</p>
      <p>{personalData?.lastName}</p>
    </div>
  );
}

export default MyPost;
