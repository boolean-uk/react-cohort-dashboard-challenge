import { UserContext } from "../../App"
import { useContext, useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ProfileInfo from "./components/ProfileInfo"
import ProfileForm from "./components/ProfileForm"

function Profile() {

  const[user, setUser] = useState({
    firstName: "default",
    lastName: "default"
  })

  const [isLoading, setIsLoading] = useState(true)
  const{id} = useParams() 
  const {loggedInUser, setLoggedInUser} = useContext(UserContext)

  useEffect(() => {
    fetchUser()
  }, []);
 
  const fetchUser = () => {
    setIsLoading(true)
    fetch(`https://boolean-api-server.fly.dev/AxelHan/contact/${id}`)
    .then((res) => res.json())
    .then((data) => {
      setUser(data)
      setIsLoading(false)
    })
  }

  console.log(user)

  useEffect(() => {
  fetchUser()
  }, [id])

  //If clicked your own profile, you should be able to edit the page. otherwise if will just show info about the user
    return (
      <div>
        {(isLoading) ?  
        (<p>loading</p>) :
        ((loggedInUser.id === user.id) ? (<ProfileForm user={user} setUser={setLoggedInUser} ></ProfileForm>) : (<ProfileInfo user={user}></ProfileInfo>))  
      }
      </div>

    )
  }
  
  export default Profile