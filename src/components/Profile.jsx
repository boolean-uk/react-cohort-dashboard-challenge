import React, { useContext, useEffect, useState } from 'react'
import "./styles/Profile.css"
import { ConnectionContext, UsersContext } from '../App';
import { useParams } from 'react-router-dom';

export function Profile() {

    const {id} = useParams()

    const {usersUrl} = useContext(ConnectionContext)
    const {users, setUsers} = useContext(UsersContext)

    const [editUser, setEditUser] = useState({})

    const handleChange = (event) => {
        const {name, value} = event.target;

        setEditUser( {...editUser, [name]: value} );
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        fetch(`${usersUrl}/${editUser.id}`, {
            method: "PUT", 
            headers: {
                'Content-Type': 'application/json',
              }, 
            body: JSON.stringify(editUser)
        }).then(res => res.json())
        setUsers(u => u.map(us => 
            us.id == editUser.id ? editUser : us)
            );
    }

    useEffect(() => {
        const activeUser = users.find(u => u.id == id)
        setEditUser({...activeUser})
    }, [users, id])

    if(!editUser) return <h1>Loading...</h1>

    return (
        <>
        <form className="form" onSubmit={handleSubmit}>
        <div className="group">
            <h2>Account Info</h2>
            <div className="input-group">
            <label>First Name*</label>
            <input type="text" name="firstName" value={editUser.firstName} onChange={handleChange}/>
            </div>
            <div className="input-group">
            <label>Last Name*</label>
            <input type="text" name="lastName" value={editUser.lastName} onChange={handleChange} />
            </div>
            <div className="input-group">
            <label>Username*</label>
            <input type="text" name="username" value={editUser.username} onChange={handleChange} />
            </div>
            <div className="input-group">
            <label>Email*</label>
            <input type="text" name="email" value={editUser.email} onChange={handleChange} />
            </div>
        </div>
        <div className="group">
            <h2>Address</h2>
            <div className="input-group">
            <label>Street</label>
            <input type="text" name="street" value={editUser.street} onChange={handleChange} />
            </div>
            <div className="input-group">
            <label>Suite</label>
            <input type="text" name="suite" value={editUser.suite} onChange={handleChange} />
            </div>
            <div className="input-group">
            <label>City</label>
            <input type="text" name="city" value={editUser.city} onChange={handleChange} />
            </div>
            <div className="input-group">
            <label>Zipcode</label>
            <input type="text" name="zipcode" value={editUser.zipcode} onChange={handleChange} />
            </div>
        </div>
        <div className="group">
            <h2>Contact info</h2>
            <div className="input-group">
            <label>Phone*</label>
            <input type="text" name="phone" value={editUser.phone} onChange={handleChange} />
            </div>
            <div className="input-group">
            <label>Website</label>
            <input type="text" name="website" value={editUser.website} onChange={handleChange} />
            </div>
        </div>
        <div className="group">
            <h2>Company Info</h2>
            <div className="input-group">
            <label>Name</label>
            <input type="text" name="companyName" value={editUser.companyName} onChange={handleChange} />
            </div>
            <div className="input-group">
            <label>Catch Phrase</label>
            <input type="text" name="catchPhrase" value={editUser.catchPhrase} onChange={handleChange} />
            </div>
            <div className="input-group">
            <label>Business Statement</label>
            <input type="text" name="businessStatement" value={editUser.businessStatement} onChange={handleChange} />
            </div>
        </div>
        <button type='submit'>Save</button>
        </form  >
        </>
    )
}
