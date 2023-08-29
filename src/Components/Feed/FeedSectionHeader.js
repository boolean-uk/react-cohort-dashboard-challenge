import LoggedUserCircle from "../Header/LoggedUserCircle";
import PostForm from "../../Forms/PostForm/PostForm";

function FeedSectionHeader() {

    return (
        <div class="section-header">
            <div class="user-circle-own">
               <LoggedUserCircle />
            </div>
            <div class="post-input">
                <PostForm name="post" />
            </div>
        </div>
    );
}

export default FeedSectionHeader;
