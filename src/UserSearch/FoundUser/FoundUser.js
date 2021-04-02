import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import Avatar from '../../Components/Avatar/Avatar';
import './FoundUser.scss';

function FoundUser(props) {
    return (
        <div className="FoundUser">
            <Link className="link" to={"/user/" + props.username + "/posts"}>
                <Avatar image={props.image} size="lg" />
                <div className="found-text">
                    <strong className="username">{props.username}</strong>
                    <div className="joined">Joined On <Moment format="MMM DD YYYY">{props.createdAt}</Moment></div>
                    <p className="bio">{props.bio}</p>
                </div>

            </Link>
        </div>
    );
}

export default FoundUser;
