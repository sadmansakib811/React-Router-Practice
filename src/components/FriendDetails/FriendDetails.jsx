import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friendDetails = useLoaderData();
    return (
        <div >
            <hr />
            <div style={{border:'2px solid red'}}>
            <h3>Friend Name: <span style={{color:'tomato'}}>{friendDetails.name}</span> </h3>
            <h5>Company:{friendDetails.company.name}</h5>
            <h5>Adress:{friendDetails.address.street},{friendDetails.address.city}</h5>
            <h5>Mobile Number: {friendDetails.phone} </h5>
            <h5>Email:{friendDetails.email}</h5>
            <h5>Website:{friendDetails.website}</h5>
            </div>
            
        </div>
    );
};

export default FriendDetails;