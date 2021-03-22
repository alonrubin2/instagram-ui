import HeaderAvatar from './HeaderAvatar/HeaderAvatar'
import React from 'react';
import './Header.scss';
import Menu from './Menu/Menu';

function Header(props) {


    return (

        <header className="Header">
            <nav className="navbar bg">
                <div className="header-box">
                    <a className="navbar-brand" href="/">
                        <h1>Take Only Pictures</h1>
                    </a>
                    <div className="menu-box">
                        <Menu />
                        <div className="nav ml-auto">
                            <HeaderAvatar />
                        </div>
                    </div>
                </div>
            </nav>
        </header>


    );
}

export default Header;
