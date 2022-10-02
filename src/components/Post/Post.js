import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SinglePost from '../SinglePost/SinglePost';

const Post = () => {
    const post = useLoaderData();
    return (
        <div>
            <h4>many post here {post.length}</h4>
            {
                post.map(singlePost =><SinglePost
                    key={singlePost.id}
                    singlePost={singlePost}
                ></SinglePost>)
            }
        </div>
    );
};

export default Post;