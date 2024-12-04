

export async function GetAllUsers(username){
    try {
        
        const response = await fetch(`https://boolean-uk-api-server.fly.dev/${username}/contact`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })

        if (!response.ok) {
            throw new Error("Error in getAllContacts response: " + response.status)
        }

        const jsonData = await response.json()
        return jsonData

    } catch (error) {
        console.error("Error while fetching contacts", error)
    }

    
}




export async function GetUserById(username, id) {
    try {
        
        const user = await fetch(`https://boolean-uk-api-server.fly.dev/${username}/contact/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })

        if (!user.ok) {
            throw new Error("Error in getUserById response: " + user.status)
        }

        const jsonData = await user.json()
        return jsonData

    } catch (error) {
        console.error("Error while fetching contacts", error)
    }
}
