import { useEffect, useState } from "react";
import userArr from "./users";

export default function Users() {
  const [users, setUsers] = useState({})
  const loadUsers = () => {
    const baseURL = "https://boolean-api-server.fly.dev"
    const endpoint = "/AllyDouillette/contact"
    
    fetch(baseURL+endpoint)
      .then(response => response.json())
      .then(data => setUsers(data))
  }
  
  useEffect(loadUsers, [])

  return (
    <p>USERS</p>
  )
}