import Header from "./Header"
import { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { MyContext } from "./MyContext"

export default function loginForm({ handleSubmit }) {

    const { loginDetails, setLoginDetail } =useContext(MyContext)
    const handleChange = (e) => {
        const { name, value } = e.target

        setLoginDetail({
            ...loginDetails,
            [name]: value
        })
    }


    return (

        <>
            <Header />
            <h2>Login</h2>
            <form>
                <input 
                    onChange={handleChange} id="firstName-input" type="text" required="true" name='firstName' placeholder="Enter your first name" value=''
                />
                <input 
                    onChange={handleChange} id="lastName-input" type="text" required="true" name='lastName' placeholder="Enter your last name" value=''
                />
                <button type='submit' onSubmit={handleSubmit}>Submit</button>
            </form>
        </>

    )

}