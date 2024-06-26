import Header from "./Header"

// import { Link } from 'react-router-dom'


export default function loginForm({ handleLogin }) {

    // eslint-disable-next-line react-hooks/rules-of-hooks

    const [loginDetails, setLoginDetails] = useState('')

    const handleChange = (e) => {
        const { name, value } = e.target
        console.log(name)

        setLoginDetails({
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
                <button type='submit' onSubmit={handleLogin}>Submit</button>
            </form>
        </>

    )

}