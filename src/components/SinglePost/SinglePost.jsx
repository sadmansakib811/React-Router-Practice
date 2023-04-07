import React from 'react';
import { Link, useNavigate} from 'react-router-dom';

const SinglePost = ({post}) => {
    const {id, title, body} = post;
    const first50Words = body.split(/\s+/).slice(0, 10).join(" ");
    const navigateHook = useNavigate();
    const buttonHandler=()=>{
        navigateHook(`/posts/${id}`);
    }
    
    return (
        <div style={{border:'2px solid tomato', margin:'10px', padding:'10px'}}>
            <h3>Title: {title}</h3>
            <h5>Body:{first50Words} <span><Link to={`/posts/${id}`}>...Read More</Link></span></h5>
            {/* here is the 1st way to use button to go to read more */}
                <Link to={`/posts/${id}`}> <button>...Read More using button</button> </Link> 
                {/* 2nd way of using button navigation: using useNavigate hook */}
                <button onClick={buttonHandler}>...Read More using UseNavigate hook</button>

        </div>
    );
};

export default SinglePost;