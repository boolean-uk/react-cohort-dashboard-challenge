const API_URl = "https://boolean-uk-api-server.fly.dev/api-docs/#/post";

export const fetchPosts = async () => {
    const response = await fetch(`${"https://boolean-uk-api-server.fly.dev/MayraMahamud/post"}`);
    return response.json();
};
export const fetchProfiles = async () => {
    const response = await fetch(`${"https://boolean-uk-api-server.fly.dev/MayraMahamud/contact"}`);
    return response.json();  
};


export const fetchComments = async (postId) => {
    const response = await fetch(`${"https://boolean-uk-api-server.fly.dev/MayraMahamud/post/${postId}/comment"}`);
    return response.json();  
};

export const AddPost = async (post) => {
    console.log(post)
    post.contactId=5
   
   
    try{
    const response = await fetch(`${"https://boolean-uk-api-server.fly.dev/MayraMahamud/post"}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',}, 
            body: JSON.stringify(post),
        });
        if(!response.ok){
            throw new Error('Failed creating post');
        }
        const data =await response.json();
        return data;
    }
    catch (error) {
        console.error('error', error);
        throw error;
    }
       
    };

    

 
        export const createComment = async (comment) => {
            console.log(comment)
            comment.postId=1
            comment.contactId =1
           
          
                const response = await fetch(`${"https://boolean-uk-api-server.fly.dev/MayraMahamud/post/1/comment"}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',}, 
                        body: JSON.stringify(comment),
                    });
                    if(!response.ok){
                        throw new Error('Failed creating comment');
                    }
                    const data =await response.json();
                    return data;
                };
                
                
                   
       


        
 