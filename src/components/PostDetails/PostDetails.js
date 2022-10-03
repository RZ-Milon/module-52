import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';


const PostDetails = () => {
    const singlePost = useLoaderData();
    // console.log(singlePost);
    const {id, title, body} = singlePost;

    
    const navigate = useNavigate();
    const handleNavigate = ()=>{
        navigate(`/friend/${id}`)
    }
    return (
        <div>
            <h2>Details about posts: {id}</h2>
            <h4>{title}</h4>
            <p>{body}</p>
            <button onClick={handleNavigate}>GET THE AUTHOR</button>
        </div>
    );
};

export default PostDetails;