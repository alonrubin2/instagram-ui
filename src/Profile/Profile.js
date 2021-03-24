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
    const [arePosts, setArePosts] = useState(true);
    const { username } = useParams();


    useEffect(() => {
        async function getPosts() {
            try {
                const posts = await PostService.getUserPosts(username)
                setPosts(posts);
                if (posts.length === 0) {
                    setArePosts(false);
                }
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
                {!arePosts && <a href='/post/create'><h2 className="no-posts">Show Us Where You've Been!</h2></a>}
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
