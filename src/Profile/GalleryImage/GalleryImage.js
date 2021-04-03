import React from 'react';
import { Link } from 'react-router-dom';

import './GalleryImage.scss';

function GalleryImage(props) {



    return (
        <div className="GalleryImage">
            <Link to={'/post/' + props.id}>
                <img src={props.img} />
            </Link>
        </div>
    );
}

export default GalleryImage;
