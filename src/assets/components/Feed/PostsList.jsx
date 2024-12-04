
import { useContext } from "react";
import App, { AppContext } from "../../../App";
import { Link, Routes, Route } from 'react-router-dom'
import Post from "./Post";

export default function PostsList() {
    const { posts } = useContext(AppContext)

    return(
        <ul>
            {posts.map((post, index) => (
                <Post key = {index} post = {post} />
            ))}
        </ul>
    )
}