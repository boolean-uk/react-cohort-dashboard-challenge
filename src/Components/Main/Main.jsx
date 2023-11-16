import { useState, useEffect } from "react"
import NewPost from "./Post"



function Main(props) {
    const { getPostData, setGetPostData } = props
    const [Initial, setInitial] = useState({})

    const [contactName, setContactName] = useState({})
    console.log('thus is the main side', getPostData)




    const getContactName = (post) => {
        fetch(`https://boolean-api-server.fly.dev/faiza-tech/contact/${post.contactId}`)
            .then((response) => response.json())
            .then((data) => {

                console.log(data.firstName, data.lastName)


                setContactName((prevName) => ({
                    ...prevName,
                    [parseInt(post.contactId)]: `${data.firstName} ${data.lastName}`
                }));

                setInitial((prevInitial) => ({
                    ...prevInitial,
                    [parseInt(post.contactId)]: `${data.firstName[0]}${data.lastName[0]}`
                }));

            })

    }

    useEffect(() => {
        console.log(contactName)
        console.log(Initial)
    }, [Initial])


    useEffect(() => {
        getPostData.forEach((post) => {
            if (!contactName[post.contactId]) {
                getContactName(post)
            }


        });
    }, [getPostData])



    return (
        <>
            <main>
                <NewPost getPostData={getPostData} setGetPostData={setGetPostData} />

                <div>
                    <ul>
                        {/** first container */}
                        {getPostData.map((post) => {
                            return (
                                <li>


                                    <div className="headerProfile">
                                        <h2>{Initial[post.contactId]}</h2>
                                    </div>

                                  
                                    <h3>{contactName[post.contactId]}</h3>

                                    <p> {post.title}</p>
                                    <br />
                                    <p>{post.content}</p>
                                    <hr />
                                    
                                    <form>
                                        <input type="text" placeholder="write a comment" />
                                        <input type="submit" value='Comment' />
                                    </form>
                                </li>

                            )

                        })}
                    </ul>
                </div>




            </main>

        </>
    )
}

export default Main