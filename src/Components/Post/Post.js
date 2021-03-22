import React, { useContext, useState } from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import Avatar from '../Avatar/Avatar';
import { UserContext } from '../../user-context';

import './Post.scss';
import Like from './Like/Like';
import Comments from '../Comments/Comments';

function Post(props) {

    const post = props.post
    const [liked, setLiked] = useState(false);
    const [color, setColor] = useState('black')
    // console.log(props)

    function like() {
        setLiked(!liked)
        if (!liked) {
            setColor('green')
        } else {
            setColor('black')
        }
        console.log(color);
    }

    return (
        <div className="Post">
            <div className="post-head">
                <a href={"/user/" + props.username + "/posts"}>
                    <Avatar className="post-avatar" size="sm" image={props.avatar} />
                    <h3 className="username">{props.username}</h3>
                </a>
            </div>
            <div className="time-and-location">
                <Link className="link" to={'/post/' + props.id}>
                    <Moment className="created-at" format="MMM D YYYY">{props.createdAt}</Moment>
                </Link>
                <a className="location" href={`https://www.google.com/maps/dir///@${post.north},${post.east},10z/data=!4m2!4m1!3e0`}>where was this taken?</a>
            </div>
            <img className="img" src={'data:; base64,' + props.img} />
            <div className="description">{props.description}</div>
            <Like post={post} color={color} onClick={like} />
            <hr />

        </div>
    );
}

export default Post;
