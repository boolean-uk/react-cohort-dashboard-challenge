import { useContext, useEffect, useState } from "react";
import Form from "./Components/Form";
import { ContentContext } from "../Helper/Contex";
import PostList from "./Components/PostList";

export default function Content() {
    const { getPosts, posts } = useContext(ContentContext)


    useEffect(() => {
        getPosts()
    }, [])

    return (
        <div className='contentclass' >
            <Form />
            <PostList elements={posts} />
        </div>
    )
}