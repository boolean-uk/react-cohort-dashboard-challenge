import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./EachPost.css";
function EachPost() {
  const [personalData, setPersonalData] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state && location.state.result) {
      setPersonalData(location.state.result);
    }
  }, [location]);

  useEffect(() => {
    console.log(personalData, "this is personalData");
  }, [personalData]);

  // Check if personalData is null before accessing its properties
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
            {`${personalData?.contactData?.firstName.charAt(
              0
            )} ${personalData?.contactData?.lastName.charAt(0)}`}
          </p>
          <div className="poster-content">
            <p
              onClick={() => navigate(-1)}
            >{`${personalData?.contactData?.firstName} ${personalData?.contactData?.lastName}`}</p>
            <p>{personalData?.postContent?.title}</p>
          </div>
        </div>
        <p>{personalData?.postContent?.content}</p>
        <section className="commentBox-container">
          <p>see previous comment</p>
          {personalData?.comments?.map((comment, index) =>
            comment.postId === personalData?.postContent?.id ? (
              <div className="commentBox" key={index}>
                <p>
                  {personalData?.contactData?.firstName.charAt(0)}{" "}
                  {personalData?.contactData?.lastName.charAt(0)}
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
