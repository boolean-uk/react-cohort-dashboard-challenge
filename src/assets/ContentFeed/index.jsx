import CreateContent from "../CreateContentForm";
import PostContainer from "../PostContainer";
import { FeedContext } from "../../App";
import { useContext } from "react";

export default function ContentFeed() {
    const context = useContext(FeedContext)

    return (
        <>
        <div className="content-feed">

            <CreateContent />
            
            <ul>
            {context.posts.slice().reverse().map((post, index) => (
                <li key={index}>
                    <PostContainer post={post} />
                </li>
            ))}
            </ul>
        </div>
        </>
    )
}