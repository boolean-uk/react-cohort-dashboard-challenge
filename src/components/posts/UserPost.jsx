import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function UserPost() {
  const { id } = useParams();

  const [comments, setComments] = useState([]);

  const getComments = () => {
    fetch(`https://boolean-api-server.fly.dev/StevenTPh/post/${id}/comment
    `)
      .then((response) => response.json())
      .then((data) => setComments(data));
  };

  const getPostUser = () => {
    
  }

  useEffect(() => {
    getComments();
  }, []);

  const getInitials = (firstName, lastName) => {
    const firstInitial = firstName ? firstName[0].toUpperCase() : "";
    const lastInitial = lastName ? lastName[0].toUpperCase() : "";
    return `${firstInitial}${lastInitial}`;
  };

  const initials = getInitials(postUser.firstName, postUser.lastName);


  console.log("comments: ", comments);

  return (
    <>
      <p>test</p>
      <p>test</p>

      <p>test</p>

      <p>test</p>

      <p>test</p>
    </>
  );
}
