import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const fullPost = useLoaderData();
    const goBackButton = useNavigate();
    const buttonHandler =()=>{
        goBackButton(-1);
        // -1 means 1 level pesone a jawa
    }
    return (
        <div>
            <hr />
            <h1>Full Post:</h1>
            <h2>{fullPost.body}</h2>
            <button onClick={buttonHandler}>Go Back</button>
        </div>
    );
};

export default PostDetails;