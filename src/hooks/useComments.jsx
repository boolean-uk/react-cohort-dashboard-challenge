import { useContext } from "react";
import { CommentsContext } from "../context/CommentsContext";

export default function useComments() {
    return useContext(CommentsContext)
}