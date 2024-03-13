import {useState} from 'react';
import "../styles/CreatePost.css"
export default function NewPostForm({onAddPost}) {
    const [formData, setFormData] = useState({
        title: '',
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

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('https://boolean-api-server.fly.dev/OnealLane/post', {
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
                <textarea
                    id='content'
                    name='content'
                    value={formData.content}
                    onChange={handleChange}
                    placeholder={`What's on your mind?`}
                    required
                ></textarea>
            </div>
            <button type="submit" className='add-btn'>Add Post</button>
        </form>
    )
}

