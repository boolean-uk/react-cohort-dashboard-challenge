import { useEffect, useState } from "react";
import { useParams } from "react-router";

import ProfileHeader from "./components/ProfileHeader";

import api from "@utilities/api";

import PulseLoader from "@components/Loader/PulseLoader";
import ProfileForm from "./components/ProfileForm/ProfileForm";

export default function ProfileContainer() {
  const [profile, setProfile] = useState(null);
  const { contactIdParam } = useParams();

  useEffect(() => {
    async function getProfile() {
      const fetch = await api.contact.get(contactIdParam);
      setProfile(await fetch);
    }

    setProfile(null);
    getProfile();
  }, [contactIdParam]);

  if (!profile) {
    return <PulseLoader />;
  }

  return (
    <div className="profile-container app-card flex flex-col gap-4">
      <ProfileHeader profile={profile} />
      <ProfileForm profile={profile} />
    </div>
  );
}
