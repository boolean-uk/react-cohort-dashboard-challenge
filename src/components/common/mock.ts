import { ContactProps, PostPartialProps } from "./types";

export const mockContact: ContactProps = {
  id: 1,
  city: "loading...",
  email: "loading...",
  gender: "loading...",
  street: "loading...",
  jobTitle: "loading...",
  lastName: "loading...",
  latitude: 0,
  longitude: 0,
  firstName: "loading...",
  profileImage:
    "https://www.gravatar.com/avatar/Rosalia_Orn33@yahoo.com?s=120&d=identicon",
  favouriteColour: "loading...",
};

export const mockPost: PostPartialProps = {
  title: "loading...",
  content: "loading...",
  id: 1,
  contactId: 1,
};
