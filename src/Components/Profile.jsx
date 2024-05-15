import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import UpdateProfileForm from "../Subcomponents/UpdateProfileForm";

export default function Profile() {
  const [userToUpdate, setUserToUpdate] = useState({});


  const userID = useParams().id;

  useEffect(() => {
    getUser();
  }, [userID]);

  const getUser = async () => {
    const data = await fetch(
      `https://boolean-uk-api-server.fly.dev/MrStashy/contact/${userID}`
    );
    const json = await data.json();
    setUserToUpdate(json);
  };

  return (
    <UpdateProfileForm userToUpdate={userToUpdate}/>
  );
}
