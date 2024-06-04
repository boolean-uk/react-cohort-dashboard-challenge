// import { MyContext } from './MyContext'
import { useContext, useState } from 'react'
import { MyContext } from './MyContext'


export default function posts() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { generateRandomColor } = useContext(MyContext)

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [myPost, setMyPost] = useState({
        id: '',
        contactId: '',
        content: ''
    })

    const handleChange =(e) => {
        
        const { name, value } = e.target
        console.log(value)

        setMyPost({
            ...myPost,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch('https://boolean-api-server.fly.dev/homonoviscoding/post', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(myPost),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Form submitted successfully", data);
        })

        setMyPost({
            id: '',
            contactId: '',
            content: ''
        })
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks

    return (
            // eslint-disable-next-line react/jsx-key
            <div className="main-header">
                <p className="logged-user" onChange={generateRandomColor}>ML</p>
                <input id="post-input" name='content' type="text" placeholder="What's on your mind" onChange={handleChange}/>
                <button className="post-btn" onSubmit={handleSubmit}>Post</button>
            </div>
        )

}




