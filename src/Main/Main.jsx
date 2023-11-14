/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */


import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Home from '../assets/Home.svg'
import PostWhatsOnYourMind from './Post'
import Comment from './Comments'
import ViewComment from './Viewcomments'

function Main(props) {
    const { dataGotten, setDataGotten  } = props
    const [ contactData, setContactData ] = useState({})
    const [initials, setInitials] = useState({})
    const [ comments, setComments ] = useState([])



    if(!dataGotten) {
        return <p> loading....</p>
    }


    const getcontactName = (contactId) => {
        fetch(`https://boolean-api-server.fly.dev/Usamaibrahim33/contact/${contactId}`)
          .then((response) => response.json())
          .then((data) => {
       

            // console.log(`${data.firstName[0]}${data.lastName[0]}`)
            setContactData((prevData) => ({
                ...prevData,
                [contactId]: `${data.firstName} ${data.lastName}`
            }));

            setInitials((prevInitials) => ({
                ...prevInitials,
                [contactId]: `${data.firstName[0]}${data.lastName[0]}`,
              }));

          })
         

          .catch((error) => {
            console.log('Error fetching contact imformation', error)
          })   

    }
    
    useEffect(() => {
        dataGotten.forEach((user) => {
             
            if(!contactData[user.contactId]) {
                getcontactName(user.contactId)
                
            }      
        })
    }, [dataGotten, initials])



    return(
        <main > 
        <PostWhatsOnYourMind  dataGotten={dataGotten} setDataGotten={setDataGotten} />

        <div className='Main-menu'>
            <ul>
                {dataGotten.map((user) => {
                    return (
                    <li className='main-each-li' key={user.id}>        



                    <div className='EachMain-content'>
              

                        <div>

                              <p className=' commentcircle'>{initials[user.contactId]}</p>
                       
                        </div>

                        <div>
                                             
  <Link to={`/home/${user.contactId}`} state={{user: user,
 initials: initials[user.contactId],
 contactData: contactData[user.contactId]}}><h3> {contactData[user.contactId]}</h3>
                             </Link> 
                        

                        {user.title}
                        </div>

                    </div>  

                      <div >
                         <p className='contentP'> {user.content}</p>
                      </div>
        
                        
                      <hr className='lines' />

                      <ViewComment initials={initials} contactData={contactData} comments={comments} setComments={setComments} user={user}/>

                   
                      <Comment comments={comments} setComments={setComments}  user={user}/>
            
                    </li>

                )
})}
             </ul>
          

        </div>
      </main>

    )
}

export default Main