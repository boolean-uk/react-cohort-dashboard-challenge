import { useEffect, useState } from 'react';

function AuthorCircle({ authorId }) {
    const [author, setAuthor] = useState(null);
    
    useEffect(() => {
        fetch(`https://boolean-uk-api-server.fly.dev/agrmet/contact/${authorId}`)
            .then((rs) => rs.json())
            .then(setAuthor)
            .catch((error) => console.error("Error fetching author:", error));
    }, [authorId]); 

    if (!author) {
        return <div className="author-circle">Loading...</div>; // Otherwise we crash. Idk why
    }

    return <div 
            className="author-circle"
             >
        {`${author.firstName[0]} ${author.lastName[0]}`}
        </div>;
}

export default AuthorCircle;
