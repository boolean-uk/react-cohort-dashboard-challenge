/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

import { useEffect, useState } from "react"

function ViewComment(props) {
    const { user, comments, setComments, initials, contactData} = props
    const [ showComment, setShowComment ] = useState(false)
    // const [ comments, setComments ] = useState([])   

    const fetchComment = (user) => {
        fetch(`https://boolean-api-server.fly.dev/Usamaibrahim33/post/${user.id}/comment`)
        .then((response) => response.json())
        .then((data) =>  {
          console.log(contactData[data.contactId])
          console.log(data)
    
        setComments(data)


        })
        .catch((error) => console.log('this is the error you know', error))
       
    }



  


    const toggleComments = () => {
        setShowComment(!showComment)
    }


    const handleDelete = (eachComment) => {

        const options = {
            method: 'DELETE'
        }

        console.log(eachComment.id)

        fetch(`https://boolean-api-server.fly.dev/Usamaibrahim33/post/${user.id}/comment/${eachComment.id}`, options)
        .then((response) => response.json())
        .then((data) =>  {
            console.log(data)

            setComments((prevComments) =>  prevComments.filter((comment) => comment.id !== eachComment.id))
       
        
        })
        .catch((error) => {
            console.log(error)

        
        })
        
    }

 
    const showAllComment = (user) => {
        console.log(user)
        toggleComments()
        fetchComment(user)

    }
    return(

 <div className='Main-menu contentP'>       
 <p className="viewcommentP" onClick={() => showAllComment(user)} >  <b>View Comment...</b></p>
 <ul>
 { showComment && comments.map((eachComment) =>  eachComment.postId === user.id && (

     <li className='main-each-li' key={user.id}>        



     <div className='EachMain-content'>
         <div>

               <p className=' commentcircle'>{initials[eachComment.contactId]}</p>
        
         </div>

         <div>

                   
{/* {contactData[eachComment.contactId]} === '' ? */}
{contactData[eachComment.contactId] === '' ? (
                            <h3>Othello</h3> // Default name when contactData is empty
                        ) : (
                            <h3>{contactData[eachComment.contactId]}</h3>
                        )}
          
         

         {eachComment.content}
         <button onClick={() => handleDelete(eachComment)}> Delete </button>
         </div>
     
                         
                     

     </div>  

         
       <hr className="lines"/>

     </li>
     ))}
</ul>


</div> 

 )

}

export default  ViewComment