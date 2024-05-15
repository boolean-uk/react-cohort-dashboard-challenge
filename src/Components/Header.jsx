import InitialIcon from "../Subcomponents/InitialIcon";
import { useContext } from "react";
import { loggedInUser } from "../App";

export default function Header() {
  const user = useContext(loggedInUser);

  return (
    <header className="py-2 px-7 bg-cohortBlue flex place-items-center justify-between w-full col-span-2">
      <img className="h-9" src={"/assets/title-header-svg.svg"} />
      <InitialIcon user={user} />
    </header>
  );
}
