import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faSearch } from '@fortawesome/free-solid-svg-icons';

import 'boxicons';


import './Menu.scss';



function Menu() {
    return (
        <ul className="navbar-nav">
            <li className="navbar-item">
                <Link  to="/post/create"><FontAwesomeIcon className="create-post" icon={faPlusCircle}></FontAwesomeIcon></Link>
                <Link to="/search" ><FontAwesomeIcon className="search" icon={faSearch}></FontAwesomeIcon></Link>

            </li>
        </ul>
    );
}

export default Menu;
