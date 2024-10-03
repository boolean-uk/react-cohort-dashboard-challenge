import { PostHeaderProps } from "../common/types";
import Avatar from "../common/Avatar";
import ContactInfo from "./ContactInfo";
import { Link } from "react-router-dom";

export default function PostHeader({
  contact,
  title,
  id,
  contactId,
}: PostHeaderProps) {
  return (
    <div className="flex items-center mb-4">
      <Avatar imgSrc={contact.profileImage} />
      <div className="ml-4">
        <Link to={"profile/" + contactId}>
          <ContactInfo {...contact} />
        </Link>
        <Link to={"post/" + id}>
          <h3 className="text-sm text-gray-400">{title}</h3>
        </Link>
      </div>
    </div>
  );
}
