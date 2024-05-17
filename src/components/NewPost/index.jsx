import Avatar from "../Avatar"
import TextInput from "../TextInput"
import Button from "../Button"

export default function NewPost(props) {
    function onPostSubmit(event) {
        event.preventDefault()
        const content = event.target.elements.content.value
        props.onPost({title: `Post - ${Math.random().toFixed(3).toString().replace('0.', "")}`, content: content, contactId: 1})
    }
    return (
        <div>

        <Avatar id={1}/>
            <form onSubmit={onPostSubmit}>
                <TextInput type="text" placeholder="Enter Post ..." name="content"/>
                    <Button type="submit">Send Posters to orphans</Button>
            </form>
            </div>
    )
}