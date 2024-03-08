import { createContext, useState } from 'react';

const ProfileContextAPIContext = createContext();


const ProfileContextAPIProvider = ({children}) => {

    const [form, setForm] = useState(
        {
            firstName: "",
            lastName: "",
            userName: "",
            email: "",
            address: "",
            street: "",
            suite: "",
            zipcode: "",
            phone: "",
            website: "",
            companyName: "",
            catchPhrase: "",
            businessStatement: "",
        }
    );

    return (

    <ProfileContextAPIContext.Provider
    value={{
        form,
        setForm,
    }}>
    
    {children}
    </ProfileContextAPIContext.Provider>

    )
}


export {ProfileContextAPIContext, ProfileContextAPIProvider}