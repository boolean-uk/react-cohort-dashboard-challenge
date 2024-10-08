import { Container, Row } from "react-bootstrap";
import { PostForm } from "../post/PostForm";
import { PostList } from "../post/PostList";


export function Dashboard() {
    return (
        <Container fluid className="d-flex flex-column p-4">
            <Row className=" p-0">
                <PostForm />
            </Row>
            <Row className="mb-3">
                <PostList/>
            </Row>
        </Container>
    )
}