import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      {title && <h2>{title}</h2>}
      {Array.isArray(blogs) && blogs.length > 0 ? (
        blogs.map((blog) => (
          <div className="blog-preview" key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>
              <h2>{blog.title}</h2>
              <p>{blog.content}</p>
            </Link>
          </div>
        ))
      ) : (
        <p>No blogs to display</p>
      )}
    </div>
  );
};

export default BlogList;
