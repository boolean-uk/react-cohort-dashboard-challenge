export default function Contact({contact, setContact}){

    return(
        <div>
            <h2>Contact info</h2>

            <form>
                <label>
                Phone*:
                <br/>
                <input type="text" name="firstName" onChange={(e) => setContact( e.target.value )} value={contact.phone}>
                
                </input>
                </label>
                <br/>
                <br/>
                <label>
                Website*:
                <br/>
                <input type="text" name="lastName" onChange={(e) => setContact( e.target.value )} value={contact.website}>
                </input>
                </label>
                <br/>
                
                
                
            </form>
                
        </div>
    )
}