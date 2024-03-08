import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../../App";
import ProfileAvatar from "../ProfileAvatar";

const fields = [
  "firstName",
  "lastName",
  "gender",
  "email",
  "jobTitle",
  "street",
  "city",
];
export default function ViewProfile() {
  const [currentUser, setCurrentUser] = useState(null);
  const users = useContext(DataContext).users;

  const { id } = useParams();

  useEffect(() => {
    if (users) {
      setCurrentUser(users.find((u) => u.id === Number(id)));
    }
  }, [users, id]);

  function handleChange(event) {
    setCurrentUser({ ...currentUser, [event.target.name]: event.target.value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(
      "https://boolean-api-server.fly.dev/pkekkonen/contact/" + currentUser.id,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(currentUser),
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        console.log("RESPONSE DATA          ");

        console.log(responseData);
      });
  };

  return (
    <div className="profile">
      <h2> Profile</h2>
      {currentUser && (
        <form className="profile-form" onSubmit={handleSubmit}>
          <div className="header">
            <ProfileAvatar user={currentUser} className="circle form-avatar" />
            <h3>{currentUser.firstName + " " + currentUser.lastName}</h3>
          </div>
          {fields.map((field, index) => (
            <div className="outer-label-input" key={index}>
              <div />
              <div className="label-and-input">
                <div className="label">
                  <label htmlFor={field}>{field} </label>{" "}
                </div>
                <input
                  type="text-area"
                  id={field}
                  name={field}
                  onChange={handleChange}
                  value={currentUser[field]}
                />
              </div>
              <div />
            </div>
          ))}
          <button type="submit">Post</button>
        </form>
      )}{" "}
    </div>
  );
}
