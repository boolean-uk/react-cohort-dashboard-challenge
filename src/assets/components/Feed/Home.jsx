import CreatePost from "../CreatePost/CreatePost";
import Post from "./Post";
import PostsList from "./PostsList";

export default function Home(){

    return(
        <>
            <CreatePost/>
            <PostsList />
        </>
    )
}