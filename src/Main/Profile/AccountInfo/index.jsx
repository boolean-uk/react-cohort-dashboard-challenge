import './style.css'

function AccountInfo({formInput, handleChange}) {
    return(
        <div className="profile-inputs-row-item">
            <h2>Account info</h2>
            <div className="account-info-form">
                <label htmlFor="first-name">First Name*</label>
                <input id="first-name" name="firstName" type="text" placeholder="First Name" value={formInput.firstName} onChange={handleChange}/>
                <label htmlFor="last-name" >Last Name*</label>
                <input id="last-name" name="lastName" type="text" placeholder="Last Name" value={formInput.lastName} onChange={handleChange}/>
                <label htmlFor="email">Email*</label>
                <input id="email" name="email" type="text" placeholder="Email" value={formInput.email} onChange={handleChange}/>
            </div>
        </div>
    )    
}

export default AccountInfo