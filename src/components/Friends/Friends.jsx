import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';

const Friends = () => {
    const friends = useLoaderData();
    
    return (
        <div>
            <h1>My Total Friends: {friends.length}</h1>
            {/* Map kore friends er data friend component a pathabo */}
            <div>
             {
                friends.map(friend=> <Friend
                key={friend.id}
                friend ={friend}
                ></Friend> )
             }
            </div>
        </div>
    );
};

export default Friends;