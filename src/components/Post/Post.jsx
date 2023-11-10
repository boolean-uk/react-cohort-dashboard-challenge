// {
// 	"id": 1,
// 	"contactId": 4,
// 	"title": "Tabgo atrocitas et acidus theatrum bene ducimus.",
// 	"content": "Sequi laborum anser. Aedificium vitiosus quae fugit tergiversatio. Assumenda bene viriliter vinco blandior corrupti circumvenio amissio."
// }

import { useEffect, useState } from "react";
import ProfileImg from "../Profile/ProfileImg";

export default function Post({post}) {

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

  const commonFirstNames = [
    'Oliver', 'Olivia', 'George', 'Amelia', 'Harry', 'Isla', 'Jack', 'Ava', 'Arthur', 'Mia',
    'Leo', 'Sophia', 'Muhammad', 'Grace', 'Charlie', 'Freya', 'Henry', 'Ella', 'Oscar', 'Emily',
    'Archie', 'Evie', 'Theo', 'Poppy', 'Jacob', 'Isabella', 'Joshua', 'Lily', 'Finn', 'Sophie',
    'James', 'Ivy', 'William', 'Charlotte', 'Ethan', 'Daisy', 'Noah', 'Alice', 'Thomas', 'Harper',
    'Lucas', 'Lola', 'Max', 'Amber', 'Alexander', 'Rosie', 'Daniel', 'Chloe', 'Logan', 'Eva',
    'Joseph', 'Millie', 'David', 'Evelyn', 'Samuel', 'Lily', 'Benjamin', 'Scarlett', 'Sebastian', 'Florence',
    'Mason', 'Aria', 'Harrison', 'Sienna', 'Edward', 'Phoebe', 'Luke', 'Elsie', 'Carter', 'Imogen',
    'Elijah', 'Ruby', 'Lewis', 'Eleanor', 'Isaac', 'Zara', 'Dylan', 'Hannah', 'Aiden', 'Aurora',
    'Felix', 'Penelope', 'Michael', 'Mila', 'Jaxon', 'Ellie', 'Riley', 'Abigail', 'Jesse', 'Maisie',
    'Jackson', 'Erin', 'Nathan', 'Maya', 'Harvey', 'Willow', 'Blake', 'Layla', 'Stanley', 'Esme'
  ]

  const commonLastNames = [
    'Smith', 'Jones', 'Taylor', 'Brown', 'Williams', 'Wilson', 'Evans', 'Patel', 'Patel', 'Johnson',
    'Wright', 'Singh', 'Lee', 'Turner', 'Scott', 'Cooper', 'Hill', 'Green', 'Wood', 'Harrison',
    'Lewis', 'Murphy', 'Allen', 'Baker', 'Walker', 'Cox', 'Hunt', 'Davies', 'Shah', 'Thompson',
    'White', 'Edwards', 'Ward', 'Harris', 'Clarke', 'Jackson', 'Martin', 'Hudson', 'Hussain', 'Carter',
    'Mitchell', 'Khan', 'Roberts', 'Young', 'Stewart', 'Ahmed', 'Hall', 'Moore', 'King', 'Turner',
    'Clark', 'Miller', 'Gupta', 'Thomas', 'Stevens', 'Phillips', 'Bennett', 'Morgan', 'Bell', 'Cox',
    'Bailey', 'Patel', 'Anderson', 'Cook', 'Singh', 'Parker', 'Graham', 'Matthews', 'Williams', 'Powell',
    'Fisher', 'Sharma', 'Reid', 'Perry', 'Price', 'Murray', 'Mills', 'Nelson', 'Lloyd', 'Wallace',
    'Cole', 'Marshall', 'Fox', 'Owen', 'Booth', 'Dixon', 'Grant', 'Mason', 'Knight', 'Rose'
  ];
  
  const firstName = commonFirstNames[parseInt(Math.random()*99)]
  const lastName = commonLastNames[parseInt(Math.random()*99)]

  return (
    <div className="card" >
      <ProfileImg firstName={firstName} lastName={lastName}/>
      <div>
        <p className="post-author">{firstName + " " + lastName}</p>
        <p className="post-title"><a href={"/post/"+post.id}>{post.title}</a></p>
        <p className="post-body">{post.content}</p>
      </div>
    </div>
  )
}