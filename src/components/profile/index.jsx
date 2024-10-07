import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../App";
import { useParams } from "react-router-dom";
import "./style.scss";
import ProfileIcon from "../profileIcon/ProfileIcon";
import InputField from "../inputFields/InputFields";

export default function ProfilePage() {
  const { users, currentUser } = useContext(UserContext);
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastName] = useState("");
  const [favouriteColour, setFavouriteColour] = useState("");
  const [readOnly, setReadOnly] = useState(true);
  const [user, setUser] = useState({});

  const { id } = useParams();

  const fetchUser = async () => {
    setUser(users.find((u) => u.id === parseInt(id)));
    console.log(users)
  };

  useEffect(() => async function () {
    await fetchUser();
  }, []);

  useEffect(() => {
    setFirstname(user.firstName);
    setLastName(user.lastName);
    setFavouriteColour(user.favouriteColour);
    if (currentUser.id === user.id) {
      setReadOnly(false)
    } else {
      setReadOnly(true)
    }
  },[user])

  return (
    <div className="profilePageMain">
      <div className="profileBody">
        <div className="banner">
          <div className="profileIcon">
            <ProfileIcon
              letters={
                (firstName
                  ? firstName.charAt(0)
                  : "?") + (lastName
                  ? lastName.charAt(0)
                  : "?")
              }
              setFavouriteColour={favouriteColour}
            />
          </div>
          <div className="nameBanner">
            <h1>
              {firstName} {lastName}
            </h1>
          </div>
        </div>
        <div className="lines">
          <hr className="halfLine" />
          <hr className="halfLine" />
        </div>
        <div className="formBody">
          <form className="profileForm">
            <div className="leftFormBody">
              <h2>Account info</h2>
              <InputField
                label={"First name"}
                id={"firstName"}
                name={"First Name"}
                placeholder={firstName}
                type={"text"}
                readOnly={readOnly}
                onChange={(e) => console.log(e)}
              />
              <InputField
                label={"Last name"}
                id={"lastName"}
                name={"last Name"}
                placeholder={lastName}
                type={"text"}
                readOnly={readOnly}
                onChange={(e) => console.log(e)}
              />
              <InputField
                label={"username"}
                id={"username"}
                name={"username"}
                placeholder={"Username"}
                type={"text"}
                readOnly={readOnly}
                onChange={(e) => console.log(e)}
              />
              <InputField
                label={"email"}
                id={"email"}
                name={"email"}
                placeholder={user.email}
                type={"text"}
                readOnly={readOnly}
                onChange={(e) => console.log(e)}
              />
            </div>
            <div className="rightFormBody">
              <h2>Address</h2>
              <InputField
                label={"street"}
                id={"street"}
                name={"street"}
                placeholder={user.street}
                type={"text"}
                readOnly={readOnly}
                onChange={(e) => console.log(e)}
              />
              <InputField
                label={"suit"}
                id={"suit"}
                name={"suit"}
                placeholder={"Suit"}
                type={"text"}
                readOnly={readOnly}
                onChange={(e) => console.log(e)}
              />
              <InputField
                label={"city"}
                id={"city"}
                name={"city"}
                placeholder={user.city}
                type={"text"}
                readOnly={readOnly}
                onChange={(e) => console.log(e)}
              />
              <InputField
                label={"zipcode"}
                id={"zipcode"}
                name={"zipcode"}
                placeholder={"Zipcode"}
                type={"text"}
                readOnly={readOnly}
                onChange={(e) => console.log(e)}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
