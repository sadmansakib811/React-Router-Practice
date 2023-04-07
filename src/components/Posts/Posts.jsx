import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SinglePost from '../SinglePost/SinglePost';

const Posts = () => {
    const posts = useLoaderData();
    return (
        <div>
            <h1>Total Blog Post: {posts.length}</h1>
            {
                posts.map(post=> <SinglePost
                key={post.id}
                post={post}
                ></SinglePost>)
            }
        </div>
    );
};

export default Posts;