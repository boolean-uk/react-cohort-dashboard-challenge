import { useState } from "react"

export default function Account({account, setAccount}){
    


    return(
        <div>
            <h2>Account info</h2>

            <form>
                <label>
                First Name*:
                <br/>
                <input type="text" name="firstName" onChange={(e) => setAccount( e.target.value )} value={account.firstName}>
                
                </input>
                </label>
                <br/>
                <br/>
                <label>
                Last Name*:
                <br/>
                <input type="text" name="lastName" onChange={(e) => setAccount( e.target.value )} value={account.lastName}></input>
                </label>
                <br/>
                <br/>
                <label>
                Username*:
                <br/>
                <input type="text" name="userName" onChange={(e) => setAccount( e.target.value )} value={account.userName}></input>
                </label>
                <br/>
                <br/>
                <label>
                Email*:
                <br/>
                <input type="text" name="email" onChange={(e) => setAccount( e.target.value )} value={account.email}></input>
                </label>
                <br/>
                
                
            </form>
                
        </div>
    )
}