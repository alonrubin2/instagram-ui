import React from 'react';
import './Avatar.scss';
import avatarDefault from './top-logo.jpeg';
import PropTypes from 'prop-types';


function Avatar(props){

    const image = props.image || avatarDefault;
    const size = props.size || 'md';


    return (
            <img className={`Avatar Avatar-${size}`} src={'data:; base64,' + image} alt="avatar" size=""/>
    );
}

Avatar.propTypes = {
    size: PropTypes.oneOf(['sm', 'md', 'lg'])
};


export default Avatar;
