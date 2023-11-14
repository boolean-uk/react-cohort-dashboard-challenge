import UserCycle from "../../../components/UserCycle";

const CommentItem = () => {
    return (
        <div className="commentItem">
            <UserCycle name={{ firstName: "Rutru", lastName: "Augue" }} />
            <div className="commentItem__content">
                <h3 className="commentItem__content-name">Rutru Augue</h3>
                <p className="commentItem__content-text">
                    Curabitur vel dolor risus. Phasellus ornare nulla dolor,
                    amit ultricies augue faucibus vel. Duis eu sapien sit amet
                    es elit laoreet laoreet.
                </p>
            </div>
        </div>
    );
};

export default CommentItem;
