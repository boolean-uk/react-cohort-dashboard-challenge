import { useContext, useState } from "react"
import { AppContext } from "../../App"
import toast, { Toaster } from 'react-hot-toast';

export default function Post(){    
    const { user } = useContext(AppContext)
    const [data, setData] = useState({"title": "", "content": "", "contactId": user}) 

    const handleChange = (event) => {
        const { name, value } = event.target
        setData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }    

    const submit = () => {        
        if (!data.contactId){return}
        fetch("https://boolean-api-server.fly.dev/louisshr/post", {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })           
        .then(response => {
            if (response.ok){
                toast("Your post was published!")
                setData(prevData => ({
                    ...prevData,
                    title: "",
                    content: ""
                }))
            }
        })        
        .catch(error => {
            console.log("error: " + error)
        })
    }
    
    return(
        <div className='create-post-container'>
            <div className='profile-icon-default'>
                <p className='font-paragraph'>AW</p>
            </div>

            <div className="post-input-container">                
                <input
                className='main-input font-paragraph' 
                type='text' 
                placeholder='Title'
                name="title"
                onChange={handleChange}
                />
                <input
                className='main-input font-paragraph'
                type='text'
                placeholder='Whats on your mind?' 
                name="content"
                onChange={handleChange}
                />
            </div>      
            <button className='post-button' onClick={submit}>Post</button>
            <Toaster />
        </div>        
    )
}