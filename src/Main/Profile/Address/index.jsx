import './style.css'

function Address({formInput, handleChange}) {
    return(
        <div className="profile-inputs-row-item">
            <h2>Address</h2>
            <div className="address-info-form">
                <label htmlFor="street">Street*</label>
                <input id="street" name="street" type="text" placeholder="Street" value={formInput.street} onChange={handleChange}/>
                <label htmlFor="city">City*</label>
                <input id="city" name="city" type="text" placeholder="City" value={formInput.city} onChange={handleChange}/>
            </div>
        </div>   
    )
}

export default Address