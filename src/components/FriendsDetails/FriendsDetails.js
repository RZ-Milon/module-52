import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendsDetails = () => {
    const friend = useLoaderData();
    return (
        <div>
            <h2>Details About: {friend.name}</h2>
            <p>Email: {friend.email}</p>
            <p>Cell: {friend.phone}</p>
            <h3>Everything you need to know about the person </h3>
        </div>
    );
};

export default FriendsDetails;