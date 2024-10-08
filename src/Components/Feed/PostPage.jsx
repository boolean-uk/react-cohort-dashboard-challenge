/* eslint-disable no-unused-vars */
import { useState, useEffect, useContext } from 'react'
import { useParams, Routes, Route, Link } from 'react-router-dom';
import PostItem from './PostItem';

export default function PostPage() {
    const [post, setPost] = useState(null);
	const { id } = useParams();

    useEffect(() => {
		const fetchPost = async () => {
			const response = await fetch(`https://boolean-uk-api-server.fly.dev/siljegja/post/${id}`);
			const jsonData = await response.json();
			setPost(jsonData);
		};
		fetchPost();
	}, [id]);

    if (!post) {
        return (
            <div>
                <p className="loading" style={{ color: 'black' }}>
                    Loading...
                </p>
            </div>
		);

    }

    return (   
        <div className='feed'>
            <PostItem post={post}/>
        </div> 
    );
}