const PersonalInfoSectionData = {
  title: "Personal Info",
  entries: [
    { labelName: "First Name", name: "firstName" },
    { labelName: "Last Name", name: "lastName" },
    { labelName: "Gender", name: "gender" },
  ],
};

const ProfessionalInfoSectionData = {
  title: "Professional Info",
  entries: [
    { labelName: "Job Title", name: "jobTitle" },
    { labelName: "Email", name: "email" },
  ],
};

const ContactInfoSectionData = {
  title: "Address",
  entries: [
    { labelName: "Street", name: "street" },
    { labelName: "City", name: "city" },
    { labelName: "Latitude", name: "latitude" },
    { labelName: "Longitude", name: "longitude" },
  ],
};

const AdditionalInfoSectionData = {
  title: "Additional Info",
  entries: [
    { labelName: "Favourite Colour", name: "favouriteColour" },
    { labelName: "Profile Image Link", name: "profileImage" },
    // Provided by db, shouldnty be edited
    // { labelName: "ID", name: "id" },
  ],
};

export const formData = {
  PersonalInfoSectionData,
  ProfessionalInfoSectionData,
  ContactInfoSectionData,
  AdditionalInfoSectionData,
};
