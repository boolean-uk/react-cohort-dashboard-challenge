import { useContext } from "react";
import { UsersContext } from "../context/UsersContext";

export default function useUsers() {
    return useContext(UsersContext)
}