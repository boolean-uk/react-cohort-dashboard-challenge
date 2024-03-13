import {useState} from 'react';

//form to add new comments
function NewCommentForm(props) {
    const {postId, onAddComment} = props
    const [formData, setFormData] = useState({
        postId: postId,
        content: '',
        contactId: 1
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    //post the comment to API upon submit
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('https://boolean-api-server.fly.dev/OnealLane/post/'
        + postId.toString()
        + '/comment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => onAddComment(data));

    setFormData({
        content: ''
    });
    };

    return(
        <form onSubmit={handleSubmit}>
            <label>
                <input
                type='text'
                name='content'
                value={formData.content}
                onChange={handleChange}
                />
            </label>
            <button type="submit">Add Comment</button>
        </form>
    )
}

export default NewCommentForm;