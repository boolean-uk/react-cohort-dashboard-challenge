import InitialIcon from "./InitialIcon"
export default function Comment ({comment, users}) {
    const user = users.find((user) => {return comment.contactId === user.id})

    return (
        <article className="flex flex-row gap-3 place-items-center">
            <InitialIcon user={user}/>
            <p className="bg-inputGrey p-2 rounded-md ">{comment.content}</p>
        </article>
    )
}