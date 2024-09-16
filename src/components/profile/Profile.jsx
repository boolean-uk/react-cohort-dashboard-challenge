import "/src/styles/profile/Profile.css"

import { ProfileImage } from "../ProfileImage"
import { UserName } from "../UserName"

export const Profile = ({user}) => {
    return (
      <>
        <h2>Profile</h2>
        <div className="default-container">
          <div className="profile-header">
            <ProfileImage user={user} size={"60px"}/>
            <UserName user={user} />
          </div>
        </div>
      </>
    );
}