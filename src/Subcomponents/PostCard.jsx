import InitialIcon from "./InitialIcon";

export default function PostCard({ post, users }) {
 
    let currentUser = users.find((user) => {
    return user.id === post.contactId;
  });


  return (
    <article className="text-cohortBlue h-auto gap-2 p-3 rounded-md bg-white">
      <header className="flex place-items-center gap-2 m-2">
        <InitialIcon user={currentUser} />
        <div className="heading">
          <p>
            <strong>
              {currentUser && `${currentUser.firstName} ${currentUser.lastName}`}
            </strong>
          </p>
          <p>{post.title}</p>
        </div>
      </header>
      <p className="ml-2">{post.content}</p>
      <hr className="h-px bg-inputGrey mx-2 border-0" />
      <section className='ml-2'>
        comment section
      </section>
      <article className="flex gap-2 p-2 rounded-md bg-white">
        <InitialIcon />
        <input
          className="bg-inputGrey p-2 flex-1 rounded-md"
          name="newPost"
          placeholder="Add a comment..."
        ></input>
      </article>
    </article>
  );
}
