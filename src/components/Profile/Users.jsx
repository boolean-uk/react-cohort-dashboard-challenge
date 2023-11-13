import { useEffect, useState } from "react";
import userArr from "./users";
import { useParams } from "react-router-dom";
import Profile from "./Profile";

export default function Users() {
  const { id } = useParams()
  return (
    <Profile contactId={id}/>
  )
}