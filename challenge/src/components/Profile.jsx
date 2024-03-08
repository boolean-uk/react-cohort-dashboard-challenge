import '../style/dash.css'
export default function Profile(){
    return(
        <div className='formWrap' >
            <div className='profileForm'>
                <form className='form'>

                <label htmlFor="firstName">
                    <h6>First Name</h6>
                </label>
                <input
                type="text"
                id="firstName"
                name="firstName"
                // onChange={handleChange}
                // value={createContact.firstName}
                placeholder='Ateeb'
                required
                />

                <h6>Last Name</h6>
                <input
                type="text"
                id="lastName"
                name="lastName"
                // onChange={handleChange}
                // value={createContact.lastName}
                placeholder='Salam'
                required
                />

                <h6>Username</h6>
                <input
                type="text"
                id="city"
                name="city"
                // onChange={handleChange}
                // value={createContact.city}
                placeholder='berserk123'
                required
                />

                <h6>Email</h6>
                <input
                type="text"
                id="state"
                name="state"
                // onChange={handleChange}
                // value={createContact.state}
                placeholder='ateeb@gmail.com'
                required
                />
                <button type="submit">Save</button>
            </form>
            </div>
            
        </div>
            
    )
}