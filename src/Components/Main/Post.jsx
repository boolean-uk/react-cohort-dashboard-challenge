import { useState } from "react"

const Post_FORM ={
    newpostcontent: ''
}

function NewPost(props) {
    const [newPostForm, setNewPostForm] = useState(Post_FORM)
    const { getPostData, setGetPostData } = props




    const UpdatePost = () => {
        const options = {
            method: 'POST',
            headers: { 'Content-Type' : 'application/json'},
            body: JSON.stringify({
                contactId: 3,
                content: newPostForm.newpostcontent,
                title: 'this is faixa'
            })
        }
        fetch('https://boolean-api-server.fly.dev/faiza-tech/post' ,options)
          .then((response) =>response.json()) 
          .then((data) =>  {
            console.log(data)
            setGetPostData(prevData => [data, ...prevData])
            setNewPostForm(Post_FORM)
        })
    }

    
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('you wantme to post this', newPostForm)
        UpdatePost()
    }

    const handleChange = (event) => {
        event.preventDefault()
        const { name, value } = event.target
        setNewPostForm({...newPostForm, [name]: value})
    }


    return(
        <form onSubmit={handleSubmit} >                              
        <div>Fk</div>
        <input type="text"
        placeholder="whats on your mind "
        name="newpostcontent" 
        value={newPostForm.newpostcontent}
        onChange={(event) => handleChange(event)}/>

       <input type="submit"  value='POST' />
   </form>
    )
}

export default NewPost