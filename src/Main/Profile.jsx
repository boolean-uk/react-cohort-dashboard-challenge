/* eslint-disable react/jsx-key */
// import { useState } from "react"
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom"

function Profile() {



    const [allUserComments, setAllUserComments] = useState([]) 
    const location = useLocation()
    const {user, contactData, initials}= location.state;
console.log(user);
console.log('contactdata', contactData)
console.log('initials', initials)



const fetchComment = (user) => {
    fetch(`https://boolean-api-server.fly.dev/Usamaibrahim33/post/${user.id}/comment`)
    .then((response) => response.json())
    .then((data) =>  {
      console.log(contactData[data.contactId])
      console.log('this is the contact data',data)
      setAllUserComments(data)



    })
    .catch((error) => console.log('this is the error you know', error))
   
}

useEffect(() => {
    fetchComment(user)
}, [])


    return(

        <div className='Main-menu'>
        <ul>
                <li className='main-each-li' key={user.id}>        



                <div className='EachMain-content'>
          

                    <div>

                          <p className=' commentcircle'>{initials}</p>
                   
                    </div>

                    <div>
                                         
<h3>{contactData}</h3>
                     
                    

                    {user.title}
                    </div>

                </div>  

                  <div >
                     <p className='contentP'> {user.content}</p>
                  </div>
    
                    
                  <hr />

                  <h2 className='contentP'>Comments</h2>
                  {allUserComments.map((com) => (
                    <li className='contentP'> {com.content}</li>
                  ))}
                   
                   <h3 className=" contentP  " > About me</h3> 

                   
               <span className="contentP "> hbjnmhgvhbjnjhbg vhbjnh gvhbjnmnjhvbjnhgvhbjnhgvhb hbunimnbvhybjnjhg hbjnkh ghvbjnkbhgvhbjnhgvhbj
      </span>
                </li>


         </ul>
      

    </div>

    
    )
}

export default Profile