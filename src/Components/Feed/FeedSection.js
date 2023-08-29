import FeedSectionHeader from "./FeedSectionHeader";
import FeedSectionBody from "./FeedSectionBody";
import { useContext } from "react";
import DataContext from "../../DataContext";
import Loader from "../Loader";

function FeedSection() {
    const { posts, users, comments } = useContext(DataContext);
 
    return (
        <main className="main-section">
            <section class="feed-section">
                <FeedSectionHeader />
                {(!(posts && posts.length) || !users || !comments) && <Loader />}
                <FeedSectionBody />
            </section>
        </main>
    );
}

export default FeedSection;
