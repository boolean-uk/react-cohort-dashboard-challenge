/* eslint-disable react/prop-types */

import { useState  } from "react"

const POST_YOUR_MIND = {

    senddata: ''


}

function PostWhatsOnYourMind(props) {
    const [ postForm, setpostForm ] = useState(POST_YOUR_MIND)
    const { dataGotten, setDataGotten  } = props

    const handlePostSubmit = (event) => {
        event.preventDefault()
        console.log(postForm)
        postYourMind()

    }

    const postYourMind = () => {

        const options ={
            method: 'POST',
            headers: { 'Content-Type' : 'application/json'},
            body: JSON.stringify({
                contactId: 7,
                content: postForm.senddata,
                title: 'this is othello gone ogne gone'
            })
        }


        fetch('https://boolean-api-server.fly.dev/Usamaibrahim33/post', options)
          .then((response) => response.json())
          .then((data) =>  {
            console.log(data)
            setDataGotten(prevData => [data, ...prevData])
            console.log('this is the data inside the post request the overall concatinating', dataGotten)

            setpostForm(POST_YOUR_MIND)

        })
          .catch((error) => console.log('they is a error', error))
    }



    const handleChange = (event) => {
        const { name , value } = event.target
        setpostForm({...postForm, [name]: value })
    }

    return(
        <form  className="firstform" onSubmit={handlePostSubmit}>
        <div className='circle'>US</div>
        <input 
          className='whatonmind'
          type="text" 
          placeholder='whats on your mind!'
          name='senddata'
          value={postForm.senddata}
          onChange={(event) => {handleChange(event)}}/>
          
        <input className='post' type="submit" value='POST' />
       </form>
    )
}

export default PostWhatsOnYourMind