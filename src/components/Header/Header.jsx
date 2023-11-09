import UserIcon from "../UserIcon";
import WebsiteTitle from "./components/WebsiteTitle";

export default function Header() {
  return (
    <header className="app-header bg-cohort-blue flex items-center justify-between px-16">
      <WebsiteTitle />
      <UserIcon />
    </header>
  );
}
