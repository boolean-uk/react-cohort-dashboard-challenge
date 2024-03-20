import {useState} from 'react';

//newPostForm, to submit new posts
function NewPostForm({onAddPost}) {
    //update state for posts
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        contactId: 1
    });

    //handlechange
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    //handlesubmit, post new post to API
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('https://boolean-api-server.fly.dev/guro18/post', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => onAddPost(data));

    //reset formData
    setFormData({
        title: '',
        content: ''
    });
    };

    return(
        <form className='new-post-form' onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor='title'>Title:</label>
                <input
                type='text'
                id='title'
                name='title'
                value={formData.title}
                onChange={handleChange}
                required
                />
            </div>
            <div className="form-group">
                <label htmlFor='content'>What do you want to say?</label>
                    <textarea
                    id='content'
                    name='content'
                    value={formData.content}
                    onChange={handleChange}
                    required
                    ></textarea>
            </div>
            <button type="submit">Add Post</button>
        </form>
    )
}

export default NewPostForm;