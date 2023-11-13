import { reduceForm } from "./object";

const profileSections = [
  {
    title: "Account info",
    fields: [
      {
        charLimit: 80,
        inputName: "firstName",
        required: true,
        title: "First Name",
        placeholderText: "Enter First Name",
      },
      {
        charLimit: 80,
        inputName: "lastName",
        required: true,
        title: "Last Name",
        placeholderText: "Enter Last Name",
      },
      {
        charLimit: 80,
        inputName: "userName",
        required: true,
        title: "Username",
        placeholderText: "Enter Username",
      },
      {
        charLimit: 80,
        inputName: "email",
        required: true,
        title: "Email",
        placeholderText: "Enter Email",
      },
    ],
  },
  {
    title: "Address",
    fields: [
      {
        charLimit: 80,
        inputName: "street",
        required: true,
        placeholderText: "Enter Street",
        title: "Street",
      },
      {
        charLimit: 80,
        inputName: "suite",
        required: false,
        placeholderText: "Enter Suite",
        title: "Suite",
      },
      {
        charLimit: 80,
        inputName: "city",
        required: true,
        placeholderText: "Enter City",
        title: "City",
      },
      {
        charLimit: 80,
        inputName: "zipCode",
        required: false,
        placeholderText: "Enter Zipcode",
        title: "Zipcode",
      },
    ],
  },
  {
    title: "Contact Info",
    fields: [
      {
        charLimit: 80,
        inputName: "phone",
        required: true,
        placeholderText: "Enter Phone Number",
        title: "Phone",
      },
      {
        charLimit: 80,
        inputName: "website",
        required: false,
        placeholderText: "Enter Website",
        title: "Website",
      },
    ],
  },
  {
    title: "Company info",
    fields: [
      {
        charLimit: 80,
        inputName: "companyName",
        required: false,
        placeholderText: "Enter Company Name",
        title: "Name",
      },
      {
        charLimit: 80,
        inputName: "companyCatchPhrase",
        required: false,
        placeholderText: "Enter Company Catch Phrase",
        title: "Catch Phrase",
      },
      {
        charLimit: 80,
        inputName: "companyBusinessStatement",
        required: false,
        placeholderText: "Enter Company Business Statement",
        title: "Business Statement",
      },
    ],
  },
];

const profileSectionsFlat = profileSections.flatMap(
  (section) => section.fields,
);

const profileInitialForm = reduceForm(profileSectionsFlat);

const newCommentFormSetup = [
  {
    inputName: "content",
    placeholderText: "Add a comment...",
    charLimit: 180,
    required: true,
  },
];

const newCommentInitialForm = reduceForm(newCommentFormSetup);

const newPostFormSetup = [
  {
    inputName: "content",
    placeholderText: "What's on your mind?",
    charLimit: 240,
    required: true,
  },
  {
    inputName: "title",
    placeholderText: "Give your post a title!",
    charLimit: 80,
    required: true,
  },
];

const newPostInitialForm = reduceForm(newPostFormSetup);

export {
  newCommentFormSetup,
  newCommentInitialForm,
  newPostFormSetup,
  newPostInitialForm,
  profileInitialForm,
  profileSections,
  profileSectionsFlat,
};
