import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getRandomColor } from "./showContent";

import "./EachPost.css";
function EachPost() {
  const [PersonData, setPersonData] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state && location.state.result) {
      setPersonData(location.state.result);
    }
  }, [location]);

  useEffect(() => {
    console.log(PersonData, "this is PersonData");
  }, [PersonData]);

  const backgroundColor = PersonData ? getRandomColor() : "";

  return (
    <>
      <section className="personal-post">
        <div className="personal-post-header">
          <p
            className="post-initial"
            onClick={() => navigate(-1)}
            style={{ background: backgroundColor }}
          >
            {`${PersonData?.contactData?.firstName.charAt(
              0
            )} ${PersonData?.contactData?.lastName.charAt(0)}`}
          </p>
          <div className="poster-content">
            <p
              onClick={() => navigate(-1)}
            >{`${PersonData?.contactData?.firstName} ${PersonData?.contactData?.lastName}`}</p>
            <p>{PersonData?.postContent?.title}</p>
          </div>
        </div>
        <p>{PersonData?.postContent?.content}</p>
        <section className="commentBox-container">
          <p>see previous comment</p>
          {PersonData?.comments?.map((comment, index) =>
            comment.postId === PersonData?.postContent?.id ? (
              <div className="commentBox" key={index}>
                <p style={{ background: backgroundColor }}>
                  {PersonData?.contactData?.firstName.charAt(0)}
                  {PersonData?.contactData?.lastName.charAt(0)}
                </p>
                <p className="comment">{comment?.content}</p>
              </div>
            ) : null
          )}
        </section>
      </section>
    </>
  );
}

export default EachPost;
