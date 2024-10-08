import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { CommentsList } from "./CommentList";
import { CommentForm } from "./CommentForm";

export function CommentSection({post}) {
    const [comments, setComments] = useState([]);
    const [showAllComments, setShowAllComments] = useState(false);

    const fetchComments = async () => {
        const response = await fetch(
          `https://boolean-uk-api-server.fly.dev/tuvaea/post/${post.id}/comment`
        );
        const data = await response.json();
        setComments(data);
      }
    
      useEffect(() => {
        fetchComments();
      }, [comments]);

    const handleToggleComments = () => {
      setShowAllComments((prev) => !prev);
    };
  
    const commentsToDisplay = showAllComments ? comments : comments.slice(0, 3);

    return (
        <Container className="p-0 m-0">
            
            <Row className="p-0 m-0">
              <CommentsList comments={commentsToDisplay} fetchComments={fetchComments}/>
            </Row>
            {comments.length > 3 && (
              <Row className="p-0 m-0">
                <p
                  onClick={handleToggleComments}
                  style={{ cursor: "pointer", fontWeight: "bold", marginTop: "1em" }}
                >
                  {showAllComments ? "Show fewer comments" : "Show all comments"}
                </p>
              </Row>
            )}
            <Row className="p-0 m-0">
                <CommentForm post={post}/>
            </Row>
        </Container>
        
    )
}

CommentSection.propTypes = {
    post: PropTypes.object.isRequired,
  };