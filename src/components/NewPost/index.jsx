export default function NewPost(props) {
    function onPostSubmit(event) {
        event.preventDefault()
        const title = event.target.elements.title.value
        const content = event.target.elements.content.value
        console.log("Data:", title, content)
        props.onPost({title: title, content: content, contactId: 1})
    }
    return (
        <div>
            <form onSubmit={onPostSubmit}>
                <input type="text" name="title">
                    </input>
                <input type="text" name="content">
                    </input>
                    <button type="submit">Send Post</button>
            </form>
            </div>
    )
}