import InitialIcon from "./InitialIcon"


export default function NewPost ({user}) {

    return (
        <article className="flex gap-2 p-3 rounded-md bg-white">
            <InitialIcon user={user} />
            <input className='bg-inputGrey p-2 flex-1 rounded-md' name='newPost' placeholder="What's on your mind?"></input>
            <button className="w-28 rounded-md text-white bg-cohortBlue">Post</button>
        </article>
    )
    
}