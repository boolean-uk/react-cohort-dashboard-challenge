import PostList from "./Posts/PostList"
import NewPostForm from "./Posts/NewPostForm"

//dashboard
function Dashboard(props) {
  const {posts, contacts, onAddPost} = props

  return (
    <main className="dashboard-layout">
      <section className="dashboard-section">
        <div className="section-header">
          <h2> Create New Post:</h2>
          <NewPostForm onAddPost = {onAddPost}/>
        </div>
        <div className="section-content">
          <h2>Posts</h2>
          <PostList posts= {posts} contacts={contacts}/>
        </div>
      </section>
    </main>
  )
}

export default Dashboard