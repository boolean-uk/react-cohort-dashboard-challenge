function AccountInfo() {
    return(
        <div>
            <h2>Account info</h2>
            <form>
                <label htmlFor="first-name">First Name*</label>
                <input id="first-name" name="firstName" type="text" placeholder="First Name" />
                <label htmlFor="last-name">Last Name*</label>
                <input id="last-name" name="lastName" type="text" placeholder="Last Name" />
                <label htmlFor="username">Username*</label>
                <input id="username" name="username" type="text" placeholder="Username" />
                <label htmlFor="email">Email*</label>
                <input id="email" name="email" type="text" placeholder="Email" />
            </form>
        </div>
    )    
}

export default AccountInfo