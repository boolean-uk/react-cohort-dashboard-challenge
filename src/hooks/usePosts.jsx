import { useContext } from "react";
import { PostsContext } from "../context/PostsContext";

export default function usePosts() {
    return useContext(PostsContext)
}