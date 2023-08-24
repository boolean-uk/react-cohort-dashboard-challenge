import UserIcon from "../../components/UserIcon";

export default function NewPost() {
    return (
        <>
            <UserIcon />
            <input className='new-post-msg' type="text" placeholder="What's on your mind?" />
        </>
    )
}