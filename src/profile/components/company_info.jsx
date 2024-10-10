
export default function Company({company, setCompany}){

    return(
        <div>
            <h2>Company info</h2>

            <form>
                <label>
                Name*:
                <br/>
                <input type="text" name="Name" onChange={(e) => setCompany( e.target.value )} value={company.name}>
                
                </input>
                </label>
                <br/>
                <br/>
                <label>
                Catch Phrase*:
                <br/>
                <input type="text" name="catchPhrase" onChange={(e) => setCompany( e.target.value )} value={company.catchPhrase}></input>
                </label>
                <br/>
                <br/>
                <label>
                Business Statement*:
                <br/>
                <input type="text" name="businessStatement" onChange={(e) => setCompany( e.target.value )} value={company.businessStatement}></input>
                </label>
                <br/>
                
                
                
            </form>
                
        </div>
    )
}