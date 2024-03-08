import './style.css'

function AccountInfo() {
    return(
        <div className="profile-inputs-row-item">
            <h2>Account info</h2>
            <form className="account-info-form">
                <label htmlFor="first-name">First Name*</label>
                <input id="first-name" name="firstName" type="text" placeholder="First Name" />
                <label htmlFor="last-name">Last Name*</label>
                <input id="last-name" name="lastName" type="text" placeholder="Last Name" />
                <label htmlFor="email">Email*</label>
                <input id="email" name="email" type="text" placeholder="Email" />
            </form>
        </div>
    )    
}

export default AccountInfo