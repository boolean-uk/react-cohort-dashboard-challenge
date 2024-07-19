import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import UserIcon from "./UserIcon";
import ProfileForm from "./ProfileForm";

export default function ViewProfile() {
  const { id } = useParams();
  const [selectedUser, setSelectedUser] = useState(null)


  useEffect(() => {
    fetch(
      `https://boolean-uk-api-server.fly.dev/zainabch123/contact/${id}`
    )
      .then((res) => res.json())
      .then((data) => setSelectedUser(data));
  }, [id]);

  console.log("id", id);
  console.log("id", selectedUser);

  return (
    <>
      {selectedUser && (
        <section className="view-profile">
          <div className="profile-header">
            <div className="profile-title">
              <h1>Profile</h1>
            </div>
          </div>
           <div className="profile-card">
            <div className="user-name">
              <UserIcon userInfo={selectedUser} />
              <h2>
                {selectedUser.firstName} {selectedUser.lastName}
              </h2>
            </div>
          <ProfileForm selectedUser={selectedUser}/>
          </div>
        </section>
      )}
    </>
  );
}
