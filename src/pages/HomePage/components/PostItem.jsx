// components
import UserCycle from "../../../components/UserCycle";
import CommentsBlock from "./CommentsBlock";

const PostItem = () => {
    return (
        <div className="postItem">
            <div className="postItem__user">
                <UserCycle name={{ firstName: "Sam", lastName: "Fletcher" }} />
                <div className="postItem__userName">
                    <span className="postItem__userName-title">
                        Sam Fletcher
                    </span>
                    <span className="postItem__userName-subtitle">
                        Ea molestias quasi exercitationem repellat qui ipsa sit
                        aut
                    </span>
                </div>
            </div>
            <div className="postItem__body">
                <p className="postItem__body-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Earum, totam? Architecto voluptas dolor error consectetur
                    voluptatibus at qui sint aliquid dignissimos aliquam est id
                    doloremque ipsa, excepturi temporibus unde recusandae?
                </p>
            </div>
            <CommentsBlock />
        </div>
    );
};

export default PostItem;
