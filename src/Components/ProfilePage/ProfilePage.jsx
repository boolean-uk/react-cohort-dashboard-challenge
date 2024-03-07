import { useCallback, useContext, useEffect, useState } from "react";
import "./ProfilePage.css";
import { UserContext } from "../../App";
import ProfileCircle from "../ProfileCircle/ProfileCircle";
import FormSection from "./FormSection";
import { formData } from "./formSectionData";
import * as API from "../../API/API";
import { useParams } from "react-router-dom";

// Profile Object
// {
//     "firstName": "Eldora",
//     "lastName": "Howe",
//     "gender": "Transgender person",
//     "email": "Neoma84@gmail.com",
//     "jobTitle": "Lead Configuration Specialist",
//     "street": "Vella Walks",
//     "city": "Bashirianbury",
//     "latitude": 35.4418,
//     "longitude": -138.0144,
//     "favouriteColour": "#8e3ffa",
//     "profileImage": "https://www.gravatar.com/avatar/Neoma84@gmail.com?s=120&d=identicon",
//     "id": 1
//   }

// Define datastructures for form fields
const {
  PersonalInfoSectionData,
  ProfessionalInfoSectionData,
  ContactInfoSectionData,
  AdditionalInfoSectionData,
} = formData;

function ProfilePage() {
  let { userId } = useParams();
  const { getUser: updateLoggedInUser } = useContext(UserContext);
  const [user, setUser] = useState("");
  const [formProfileData, setFormProfileData] = useState();

  const updateUser = (event) => {
    event.preventDefault();
    const userId = formProfileData.id;
    delete formProfileData.id;

    API.updateUser(userId, formProfileData)
      .then((res) => res.json())
      .then((data) => {
        console.log("Updated user and received: ", data);
        //retrieve user from API again to see changes
        getUser();
        //Update loggedInuserProfile if that user profile being edited
        if (userId === 1) {
          updateLoggedInUser();
        }
      });
  };
  // Get user from api
  function getUser() {
    API.getUserById(userId)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUser(data);
      });
  }

  const updateFormData = useCallback(() => {
    setFormProfileData(user);
  }, [user, setFormProfileData]);

  const handleValueChange = (event) => {
    event.preventDefault();
    const { value, name } = event.target;
    setFormProfileData({ ...formProfileData, [name]: value });
  };

  useEffect(() => updateFormData(), [updateFormData]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => getUser(), [userId]);
  if (!user) {
    return <>Loading</>;
  }
  if (!formProfileData) {
    return <>Loading</>;
  }

  //   console.log(user);
  // console.log(formProfileData);
  return (
    <div className="feed-background profile-page">
      <div className="mx-5 mt-4">
        <h2>
          <b>Profile</b>
        </h2>
      </div>
      <div className="feed-item mx-4 p-5">
        <div className="d-flex  flex-row align-items-center pb-4">
          <ProfileCircle user={user} />{" "}
          <h2 className="mx-3">
            <b>
              {user.firstName} {user.lastName}
            </b>
          </h2>
        </div>
        <form
          onSubmit={updateUser}
          className="full-form d-flex justify-content-center"
        >
          <div id="left side" className="flex-fill">
            <FormSection
              formSectionData={PersonalInfoSectionData}
              formProfileData={formProfileData}
              handleValueChange={handleValueChange}
            />
            <FormSection
              formSectionData={ProfessionalInfoSectionData}
              formProfileData={formProfileData}
              handleValueChange={handleValueChange}
            />
          </div>
          <div id="right side " className="flex-fill d-flex flex-column ">
            <FormSection
              formSectionData={ContactInfoSectionData}
              formProfileData={formProfileData}
              handleValueChange={handleValueChange}
            />
            <FormSection
              formSectionData={AdditionalInfoSectionData}
              formProfileData={formProfileData}
              handleValueChange={handleValueChange}
            />
            <button
              style={{
                // maxWidth: "200px",
                borderRadius: "22px",
                alignSelf: "flex-end",
              }}
              className="btn px-5 mx-3 btn-primary"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default ProfilePage;
