import React from 'react';
import { useEffect, useState } from 'react';
import { PostService } from '../services/post.services';
import './Feed.scss';
import Sidebar from './Sidebar/Sidebar';
import Post from '../Components/Post/Post';

function Feed(props) {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        PostService.getAllPosts()
        .then(posts => setPosts([...posts]));
        
    }, []);


    return (
        <div className="Feed">
            <div className="mainFeed">
                {posts.map((post, index) => {
                    return <Post key={index} 
                    avatar={post.user.avatar}
                    id={post._id}
                    username={post.user.username} 
                    userId={post.user._id}
                    post={post}
                    img={post.image} 
                    description={post.description}
                    createdAt={post.createdAt} />
                })}
            </div>
            {/* <Sidebar className="sideBar" /> */}

        </div>
    );
}

export default Feed;
