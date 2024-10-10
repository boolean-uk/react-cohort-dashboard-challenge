
export default function Address({address, setAddress}){

    return(
        <div>
            <h2>Address</h2>

            <form>
                <label>
                Street*:
                <br/>
                <input type="text" name="street" onChange={(e) => setAddress( e.target.value )} value={address.street}>
                
                </input>
                </label>
                <br/>
                <br/>
                <label>
                Suite*:
                <br/>
                <input type="text" name="suite" onChange={(e) => setAddress( e.target.value )} value={address.suite}></input>
                </label>
                <br/>
                <br/>
                <label>
                City*:
                <br/>
                <input type="text" name="city" onChange={(e) => setAddress( e.target.value )} value={address.city}></input>
                </label>
                <br/>
                <br/>
                <label>
                Zipcode*:
                <br/>
                <input type="text" name="email" onChange={(e) => setAddress( e.target.value )} value={address.zipCode}></input>
                </label>
                <br/>
                
                
            </form>
                
        </div>
    )
}