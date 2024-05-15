import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import UpdateProfileForm from "../Subcomponents/UpdateProfileForm";
import { BarLoader } from "react-spinners";

export default function Profile() {
  const [userToUpdate, setUserToUpdate] = useState(null);

  const userID = useParams().id;

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const data = await fetch(
      `https://boolean-uk-api-server.fly.dev/MrStashy/contact/${userID}`
    );
    const json = await data.json();
    setUserToUpdate(json);
  };

  if (!userToUpdate) {
    return (<BarLoader />)
  }
  return (
    <UpdateProfileForm userToUpdate={userToUpdate}/>
  );
}
