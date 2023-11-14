import UserIcon from "@components/UserIcon";
import UserName from "@components/UserName";
import { contactProps } from "@utilities/propTypeDefs";

export default function ProfileHeader({ profile }) {
  return (
    <section className="profile-form-header flex items-center gap-4">
    {/* TODO: Mess with sizes for profile form */}
      <UserIcon contact={profile} />
      <UserName contact={profile} />
    </section>
  );
}

ProfileHeader.propTypes = {
  profile: contactProps,
};
