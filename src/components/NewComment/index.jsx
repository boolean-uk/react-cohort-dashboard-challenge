import Avatar from "../Avatar"
import Button from "../Button"
import TextInput from "../TextInput"

export default function NewComment(props) {
    function onCommentSubmit(event) {
        event.preventDefault()
        const content = event.target.elements.content.value
        console.log("Data:", content)
        props.onComment({content: content, contactId: 1})
    }
    return (
        <div>
            <Avatar id={1}/>
            <form onSubmit={onCommentSubmit}>
                <TextInput placeholder="Write a Comment..." type="text" name="content">
                    </TextInput>
                    <Button type="submit">Send Comment</Button>
            </form>
            </div>
    )
}