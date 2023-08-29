import { useContext } from "react";
import DataContext from "../../DataContext";

function ToggleElement(props) {
    const { comments } = useContext(DataContext);
    const { post, toggleExpanded } = props;

    return (
        <>
            {comments[post.id]
                ? comments[post.id].length > 3 && (
                      <button onClick={toggleExpanded}>
                          {post.expanded
                              ? "Collapse comments"
                              : "See previous comments"}
                      </button>
                  )
                : null}
        </>
    );
}

export default ToggleElement;
