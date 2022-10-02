import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Singlepost.css'

const SinglePost = ({singlePost}) => {
    // console.log(SinglePost);
    const {id, title, body} = singlePost;
    const navigate = useNavigate();

    const handleNavigate = ()=>{
        navigate(`/singlePost/${id}`);
    };
    return (
        <div className='post'>
            <p>{title}</p>
            <p><small>{body}</small></p>
            <Link to={`/singlePost/${id}`}>Visit: {id}</Link>
            <Link to={`/singlePost/${id}`}>
                <button>Show Details</button>
            </Link>
            <button onClick={handleNavigate}>Show Details2</button>
        </div>
    );
};

export default SinglePost;