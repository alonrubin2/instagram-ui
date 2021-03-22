import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import React, { useContext, useState, useEffect } from 'react';
import environment from '../../../environments';
import { UserService } from '../../../services/user.service';
import { UserContext } from '../../../user-context'
import './Like.scss';
import { PostService } from '../../../services/post.services';


function Like(props) {

    const post = props.post;


    const { user, setUser } = useContext(UserContext);
    const [likes, setLikes] = useState(post.likes.length || 0);
    const [isLiked, setIsLiked] = useState(post.likes.includes(user._id));
    const [thisPost, setThisPost] = useState(post);

    useEffect(() => {
        setIsLiked(thisPost.likes.includes(user._id));
    }, [thisPost]);

    async function like() {
        const likedPost = await PostService.like(post._id);
        setThisPost(likedPost);
        setLikes(likedPost.likes.length);
    }

    async function unLike() {
        const unlikedPost = await PostService.unLike(post._id, user._id);
        setThisPost(unlikedPost);
        setLikes(unlikedPost.likes.length);
    }





    return (
        <div className="Like" onClick={() => {
            isLiked ? unLike() : like();
        }}>
            <FontAwesomeIcon className={isLiked ? `like like-green` : `like like-black`} icon={faThumbsUp}></FontAwesomeIcon>
            <div className="num-of-likes">
                {likes}
            </div>
        </div>
    );
}



export default Like;
