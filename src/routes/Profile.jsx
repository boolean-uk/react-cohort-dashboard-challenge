import "../styles/Content.css";
import "../styles/Post.css";
import "../styles/Profile.css";
import ProfileCircle from "../components/ProfileComponents/ProfileCircle";
import ProfileForm from "../components/ProfileComponents/ProfileForm";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getContact } from "../services/PostService";
import { useEffect, useState } from "react";

export default function Profile() {
  const { id } = useParams();
  const {
    data: user,
    isLoading,
    error,
  } = useQuery(["getContact", id], () => getContact(1)); //API still doesnt have a number 1
  const [fullname, setFullname] = useState("");

  useEffect(() => {
    if (user) {
      setFullname(`${user.firstName} ${user.lastName}`);
    }
  }, [user]);

  if (isLoading) return <h1>Page is loading...</h1>;
  if (error) return <h1>{error.message}</h1>;

  return (
    <div className="content">
      <h1>Profile</h1>
      <div className="card">
        {fullname !== "" && (
          <>
            <div className="user-info">
              <ProfileCircle
                fullname={fullname}
                color={user.favouriteColour}
                contactId={id}
              />
              <h2>{fullname}</h2>
            </div>
            <ProfileForm user={user} />
          </>
        )}
      </div>
    </div>
  );
}