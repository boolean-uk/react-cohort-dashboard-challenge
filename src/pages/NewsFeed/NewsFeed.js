import "../../styles/main.css"
import NewPostSection from "./NewPostSection";
import PostSection from "./PostSection";

export default function NewsFeed() {
    return(
        <>
        <div className='main'>
            <NewPostSection />
            <PostSection />
        </div>
        </>  
    )
}
    