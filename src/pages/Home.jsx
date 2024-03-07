import { useContext, useEffect, useState, createContext } from "react";
import { PostContext, UserContext } from '../App';
import Posts from "../components/posts/Posts";
import "../styles/Home.css";
import CreatePost from "../components/posts/CreatePost";


export default function Home() {
    const { posts } = useContext(PostContext);

    return (
        <div className="home">
            <CreatePost />
            {
                posts.length > 0 ? <Posts /> : <p className="notFound">No posts found, try creating some!</p>
            }
        </div>
    )
}