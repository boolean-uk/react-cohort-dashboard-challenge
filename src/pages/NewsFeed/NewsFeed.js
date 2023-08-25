import "../../styles/main.css"

import Header from '../../components/Header'
import NavBar from '../../components/NavBar';
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
    