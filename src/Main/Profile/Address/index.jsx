import './style.css'

function Address() {
    return(
        <div className="profile-inputs-row-item">
            <h2>Address</h2>
            <form className="address-info-form">
                <label htmlFor="street">Street</label>
                <input id="street" name="street" type="text" placeholder="Street" />
                <label htmlFor="city">City</label>
                <input id="city" name="city" type="text" placeholder="City" />
                <label htmlFor="email">Email*</label>
                <input id="email" name="email" type="text" placeholder="Email" />
            </form>
        </div>   
    )
}

export default Address