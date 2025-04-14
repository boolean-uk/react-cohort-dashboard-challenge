import Propic from "./Propic.jsx";
import { Context } from "./App.jsx";
import { useContext } from "react";

export default function MainPropic() {
  const [currentUser] = useContext(Context);

  return <Propic contact={currentUser} />;
}
