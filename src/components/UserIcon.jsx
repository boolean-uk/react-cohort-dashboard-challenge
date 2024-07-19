import { Link } from "react-router-dom";

export default function UserIcon({userInfo}) {

  
    return (
      <>
        {userInfo && (
          <div
            className="user-img"
            style={{ backgroundColor: `${userInfo.favouriteColour}` }}
          >
            <Link
              to={`/profile/${userInfo.id}`}
            >{`${userInfo.firstName[0]}${userInfo.lastName[0]}`}</Link>
          </div>
        )}
      </>
    );
}