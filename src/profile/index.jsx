import Account from "./components/account"
import Address from "./components/address"
import Company from "./components/company_info"
import Contact from "./components/contact_info"
import { useState, useContext } from "react"
import Profile_Icon from "../header/components/profile_icon"
import { userContext } from "../App"

export default function Profile(){

    const {user}=useContext(userContext)


    const [account, setAccount]=useState(
        {
            firstName:'',
            lastName:'',
            userName:'',
            email:''
        }
    )

    const [address, setAddress]=useState(
        {
            street:'',
            suite:'',
            city:'',
            zipCode:''
        }
    )

    const [contact, setContact]=useState(
        {
            phone:'',
            website:''
        }
    )

    const [company, setCompany]=useState(
        {
            name:'',
            catchPhrase:'',
            businessStatement: ' '

        }
    )

    return(

        <div className="profile">
            <h1>Profile</h1>
            <div className="profile_info">
            
                <div className="profile_header">
                    <Profile_Icon user={user}/>
                    &nbsp; 
                    <h1>FirstName Lastname</h1>
                
                    
                </div>
                <hr/>

                <div className="personal_data">
                    <div><Account account={account} setAccount={setAccount}/></div>
                    <div><Address address={address} setAddress={setAddress}/></div>
                    <div><Contact contact={contact} setContact={setContact}/></div>
                    <div><Company company={company} setCompany={setCompany}/></div>

                    
                </div>
                <button>Save</button>
            </div>

        </div>
    )

    
}