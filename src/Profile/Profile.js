import React from 'react';
import './Profile.scss';
import { useEffect, useState } from 'react';
// import Post from '../Components/Post/Post';
import { PostService } from '../services/post.services';
import { useParams } from 'react-router-dom';
import ProfileHeader from './ProfileHeader/ProfileHeader';
import GalleryImage from './GalleryImage/GalleryImage';
import { UserService } from '../services/user.service';


function Profile() {

    const [posts, setPosts] = useState([]);
    const { username } = useParams();


    useEffect(() => {
        async function getPosts() {
            try {
                const posts = await PostService.getUserPosts(username)
                setPosts(posts);
            }
            catch (err) {
                console.log(err);
            }
        }

        getPosts()

    }, [username]);


    return (
        <div className="Profile">
            <ProfileHeader postNum={posts.length}
                username={username}
            />
            <div className="posts-box">
                {posts.map((post, index) => {

                    return <GalleryImage className="gallery-img"
                        key={index}
                        id={post._id}
                        img={post.image}
                    />
                })}
            </div>
        </div>
    );
}

export default Profile;
