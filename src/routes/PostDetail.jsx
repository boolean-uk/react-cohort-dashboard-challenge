import { useNavigate, useParams } from "react-router-dom";
import { getPost } from "@services/PostService";
import { useQuery } from "react-query";
import Post from "@components/Post/Post";

export default function PostDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isLoading, error, data } = useQuery(["postDetail", id], () =>
    getPost(id)
  );

  return (
    <div className="content">
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {data && (
        <Post
          id={id}
          contactId={data.contactId}
          title={data.title}
          onDelete={() => navigate("/")}
        >
          {data.content}
        </Post>
      )}
    </div>
  );
}
