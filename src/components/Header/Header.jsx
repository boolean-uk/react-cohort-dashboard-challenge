import UserIcon from "../UserIcon";
import WebsiteTitle from "./components/WebsiteTitle";

export default function Header() {
  return (
    <header className="bg-cohort-blue flex h-24 items-center justify-between px-16">
      <WebsiteTitle />
      <UserIcon />
    </header>
  );
}
