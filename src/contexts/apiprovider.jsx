import React, { createContext, useContext, useEffect, useState } from 'react'

export const ApiContext = createContext({})

const Apiprovider = ({children}) => {


    const GetPosts = async () => {
        const response = await fetch('https://boolean-uk-api-server.fly.dev/espensl2000/post')
        const data = await response.json()

        return data
    }

    const PostPost = async (formData, contactId) => {
        const response = await fetch('https://boolean-uk-api-server.fly.dev/espensl2000/post', {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify({...formData, contactId: contactId})
        })
        if(response.ok){
            console.log("Post successfull")
        }
    }

    const GetComments = async () => {
        const CommentResponse = await fetch(`https://boolean-uk-api-server.fly.dev/espensl2000/post/${post.id}/comment`)

    }

    const PostComment = async (formData, postId, contactId) => {
        const response = await fetch(`https://boolean-uk-api-server.fly.dev/espensl2000/post/${postId}/comment`, {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify({
                
                postId: postId,
                content: formData,
                contactId: contactId
            })
        })

        if(response.ok){
            console.log("Comment successfull")
        }
    }

    const GetContacts = async () => {
        const response = await fetch('https://boolean-uk-api-server.fly.dev/espensl2000/contact')
        const data = await response.json()
    }

    const GetContact = async () => {
        const response = await fetch(`https://boolean-uk-api-server.fly.dev/espensl2000/contact/${contactId}`)
        const data = await response.json()
        
    }

    const PutContact = async (body, contactId) => {
        const response = await fetch(`https://boolean-uk-api-server.fly.dev/espensl2000/contact/${contactId}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        if(response.ok){
            console.log("Contact updated successfully")
        }
    }

    const GetParsedData = async () => {
        const PostResponse = await fetch('https://boolean-uk-api-server.fly.dev/espensl2000/post')
        const ContactResponse = await fetch('https://boolean-uk-api-server.fly.dev/espensl2000/contact')

        if(!PostResponse.ok || !ContactResponse.ok){
            throw new Error("Failed to fetch")
        }

        let PostData = await PostResponse.json()
        let ContactData = await ContactResponse.json()



        const FetchComments = async (postId) => {
            const response = await fetch(`https://boolean-uk-api-server.fly.dev/espensl2000/post/${postId}/comment`);
            const ContactResponse = await fetch('https://boolean-uk-api-server.fly.dev/espensl2000/contact')

            const data = await response.json()
            const ContactData = await ContactResponse.json()

            let parsedData = []
            
            data.forEach((d) => {
                parsedData.push({
                    ...d,
                    author: ContactData.find((c) => c.id ===d.contactId)
                })
            })

            return parsedData; // Wait for the comments to be fetched
        };
        
        const parsePosts = async () => {
        let parsedData = []

            for (const post of PostData) {
                const commentList = await FetchComments(post.id); // Wait for comments before continuing
                parsedData.push({
                    ...post,
                    author: ContactData.find((contact) => contact.id === post.contactId),
                    comments: commentList
                });
            }
            return parsedData.sort((a, b) => b.id - a.id)
        };
        

        return  parsePosts();
        
    }

 

    return (
        <ApiContext.Provider
            value={{GetPosts, PostPost, GetComments, PostComment, GetParsedData, PutContact}}
        >
            {children}
        </ApiContext.Provider>
    )
}

export default Apiprovider
