import { useState, useEffect } from "react"

export default function Profile({posts}) {
    const [profile, setProfile] = useState({})
    

    useEffect(() => {
        posts.map(post => {
            fetch(`https://boolean-api-server.fly.dev/ilham-saleh/contact/${post.contactId}`)
            .then(res => res.json())
            .then(data => {
                setProfile(data)
            })
      
        })
    }, [posts])

    const handleChange = (event) => {

        const {name, value} = event.target

        setForm({...form, [name]: value})

    }

    // const handleSubmit = (event) => {
    //     event.preventDefault()

    //     const options = {
    //         method: 'POST',
    //         headers: {'content-type': 'application/json'},
    //         body: JSON.stringify(form)
    //       }

    //     fetch(`https://boolean-api-server.fly.dev/ilham-saleh/contact`, options)
    //     .then(res => res.json())
    //     .then((data) => getPosts(data))

    //     setForm(INPUT_DATA)
    // }
 
    return (
        <div className="profile">
           <h1>Profile</h1>

            <div className="profile-form-header">
                <div className="user-img-container">
                    {profile.firstName}
                </div>
                <div className="profile-user-name"><h3>{profile.firstName} {profile.lastName}</h3></div>
            </div>
           <div className="profile-form-container">
            <div className="left-side">

                <div className="account-info">
                <h2>Account Info</h2>
                <form className="form">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" name="firstName" value={profile.firstName}/>

                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" name="lastName" value={profile.lastName}/>

                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" value={`${profile.firstName}${profile.lastName}`}/>

                    <label htmlFor="email">Email</label>
                    <input type="email" value={profile.email} required/>
                </form>
                </div>

                <div className="contact-info">
                    <form className="form">
                        <label htmlFor="phone">Phone</label>
                        <input type="text" name="phone" value={profile.phone} required/>
                        
                        <label htmlFor="website">Website</label>
                        <input type="text" name="website" value={profile.webisite}/>
                    </form>
                </div>
            </div>

            <div className="right-side">
                <div className="address-info">
                    <h2>Address</h2>

                    <form className="form">
                        <label htmlFor="street">Street</label>
                        <input type="text" name="street" placeHolder={profile.street}/>

                        <label htmlFor="suite">Suite</label>
                        <input type="text" name="suite" placeholder={profile.suite}/>

                        <label htmlFor="zipcode">Zipcode</label>
                        <input type="text" name="zipcode" placeholder={profile.zipcode}/>
                    </form>
                </div>

                <div className="company-info">
                    <form className="form">
                        <label htmlFor="companyName">Name</label>
                        <input type="text" name="companyName" />

                        <label htmlFor="statement">Business Statement</label>
                        <input type="text" name="statement" />
                    </form>

                    {/* <button className="profile-btn">Save</button> */}
                </div>

            </div>
           </div>
        </div>
    )
}