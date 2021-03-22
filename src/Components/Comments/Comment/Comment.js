import React from 'react';
import Moment from 'react-moment';
import Avatar from '../../Avatar/Avatar';
import './Comment.scss';



function Comment(props) {


    return (
        <div className="Comment">
            <div className="comment-head">
                <a href={"/user/" + props.username + "/posts"}>
                    <Avatar className="comment-avatar" size="sm" image={props.avatar} />
                    <h3 className="comment-username">{props.username}</h3>
                    <Moment className="created-at" format="MMM D YYYY">{props.createdAt}</Moment>

                </a>
            </div>
            <div className="content">{props.content}</div>
            <hr />
        </div>
    );
}

export default Comment;
