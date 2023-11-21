import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProfilePage from "./components/ProfilePage";

export default function Profile() {
  const [contactProfile, setContactProfile] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const param = useParams();
  const { id } = param;

  useEffect(() => {
    fetch(`https://boolean-api-server.fly.dev/yee0802/contact/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setContactProfile(data);
        setRefresh(false);
      });
  }, [refresh]);

  if (contactProfile) {
    return (
      <div className="profile-page-container">
        <h1>Profile</h1>
        <ProfilePage contactProfile={contactProfile} setRefresh={setRefresh} />
      </div>
    );
  }
}
