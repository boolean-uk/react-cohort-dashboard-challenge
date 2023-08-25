import '../../styles/profile.css'
import ProfileContent from './components/ProfileContent';

const demoUser = {
  "id": 1,
  "name": "Alex Walker",
  "username": "AWalker",
  "email": "Sincere@april.biz",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  }
}

export default function Profile() {
  const user = demoUser

  return (
    <main className='main profile'>
      <h1>Profile</h1>
      <ProfileContent user={user} />
    </main>
  )
}