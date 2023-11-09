// {
// 	"id": 1,
// 	"contactId": 4,
// 	"title": "Tabgo atrocitas et acidus theatrum bene ducimus.",
// 	"content": "Sequi laborum anser. Aedificium vitiosus quae fugit tergiversatio. Assumenda bene viriliter vinco blandior corrupti circumvenio amissio."
// }

import { useEffect, useState } from "react";
import ProfileImg from "../Profile/ProfileImg";

export default function Post({post}) {

  console.log(post.contactId)

  // const [user, setUser] = useState(null)
  // useEffect(getUser, [])

  // const getUser = () => {
  //   const baseURL = "https://boolean-api-server.fly.dev/"
  //   const directory = "AllyDouillette" + "/contact"
  //   const endpoint = `/${post.contactId}`

  //   fetch(baseURL + directory + endpoint)
  //     .then(res => res.json())
  //     .then(data => setUser(data))
  //     .then(() => console.log("loaded user"))
  //     // .catch(() => setUser({firstName: "N", lastName: "A"}))
  // }

  return (
    <div className="card" >
      <ProfileImg firstName="Taylor" lastName="Swift"/>
      <div>
        <p>{post.title}</p>
        <p>{post.content}</p>
      </div>
    </div>
  )
}