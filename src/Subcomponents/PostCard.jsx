import InitialIcon from "./InitialIcon";

export default function PostCard() {
  return (
    <article className="text-cohortBlue h-auto gap-2 p-3 rounded-md bg-white">
      <header className="flex place-items-center gap-2 m-2">
        <InitialIcon />
        <div className="heading">
          <p>Name name</p>
          <p>Title title title</p>
        </div>
      </header>
      <p className="ml-2">Post body post body</p>
      <hr className="h-px bg-inputGrey mx-2 border-0"/>
      <article className="flex gap-2 p-3 rounded-md bg-white">
            <InitialIcon />
            <input className='bg-inputGrey p-2 flex-1 rounded-md' name='newPost' placeholder="Add a comment..."></input>
        </article>
    </article>
  );
}
