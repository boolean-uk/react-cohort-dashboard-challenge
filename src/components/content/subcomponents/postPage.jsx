import Post from "./post";


export default function PostPage({ activePost, contacts }) {
    const userInfo = contacts.find(cont => cont.id === activePost.contactId)

    
    return (
    <>
    <main className="post-page">
      <Post
        postInfo={activePost}
        userInfo={userInfo}
        contacts={contacts}
      />
    </main>
    </>
  );
}
