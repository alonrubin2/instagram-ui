import React, { useContext } from 'react';
import './PostPage.scss';
import { useParams } from 'react-router-dom';
import { PostService } from '../services/post.services';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Moment from 'react-moment';
import { UserContext } from '../user-context';
import 'moment-timezone';
import Avatar from '../Components/Avatar/Avatar';
import Like from '../Components/Post/Like/Like';
import Comments from '../Components/Comments/Comments';


function PostPage() {

    const { id } = useParams();
    const [post, setPost] = useState(null);
    const { user } = useContext(UserContext);





    useEffect(() => {
        async function getPost() {
            setPost(await PostService.getOnePost(id))
        }
        getPost();
    }, [id]);
    console.log(post);

    return (
        <>
            { post && (
                <div className="PostPage">
                    <div className="head-avatar">
                        <Link className="link" to={"/user/" + post.user.username + "/posts"}>
                            <Avatar className="post-page-avatar" size="sm" image={post.user.avatar} />
                            <h3 className="post-page-headline">{post.user.username}</h3>
                        </Link>
                    </div>
                    <div className="time-and-location">
                        <Moment className="created-at" fromNow >{post.createdAt}</Moment>
                        <a className="location" href={`https://www.google.com/maps/dir///@${post.north},${post.east},10z/data=!4m2!4m1!3e0`}>
                            {/* not working properly, jumps ony to Haifa even thogh the location string in the url is right */}
                            Where was this taken?
                            </a> 

                    </div>
                    <img className="img" src={'data:; base64,' + post.image} />
                    <div className="post-page-description">{post.description}</div>
                    <Like post={post} />
                    <Comments postId={post._id} />
                </div>
            )}
        </>
    );
}

export default PostPage;
