import { Link } from "react-router-dom";

export default function PostOverview( {post, match} ) {

  console.log(match.firstName)

    return(
        <>
          <div className="post-overview">
          <div
            className="Image"
            style={{
              backgroundColor: match ? match.favouriteColour : "FFFFF",
            }}
          >
            {match ? (
              <h3>
                {match.firstName.charAt(0)}
                {match.lastName.charAt(0)}
              </h3>
            ) : (
              <p>Loading user... </p>
            )}
          </div>
          <div className="name-title-post">
            <div className="name-post">
              {match ? (
                <p>
                  {match.firstName} {match.lastName}
                </p>
              ) : (
                <p>Loading user... </p>
              )}
            </div>

            <div className="title-post">
              <Link to={`posts/${post.id}`}> {post.title}</Link>
            </div>
          </div>
        </div>

        <div className="full-title-post">
          <p>{post.content}</p>
        </div>
        </>
    )

}