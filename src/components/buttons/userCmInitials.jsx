import { GetCMInitials } from "../../utils/functions";

const UserCmInitials = ({ c, contacts }) => {
  return (
    <button id="userInitials">{GetCMInitials(c.contactId, contacts)}</button>
  );
};

export default UserCmInitials
