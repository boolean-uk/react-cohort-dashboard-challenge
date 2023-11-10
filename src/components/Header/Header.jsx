import UserIcon from "../UserIcon";
import WebsiteTitle from "./components/WebsiteTitle";

import { contactProps } from "../../utilities/propTypeDefs";

export default function Header({ user }) {
  const { firstName, lastName } = user;
  return (
    <header className="app-header bg-cohort-blue flex items-center justify-between px-16">
      <WebsiteTitle />
      <UserIcon contact={user} firstName={firstName} lastName={lastName} />
    </header>
  );
}

Header.propTypes = {user: contactProps}
