import React, { useContext } from 'react';
import Cookies from 'js-cookie';
import { useHistory } from 'react-router-dom';
import { UserService } from '../../services/user.service'
import './HeaderAvatar.scss';
import Avatar from '../../Components/Avatar/Avatar';
import { UserContext } from '../../user-context';

function HeaderAvatar() {

    const { user, setUser } = useContext(UserContext);
    const history = useHistory();


    function logout() {
        Cookies.remove('top-user');
        setUser({})
        UserService.me();
        history.push('/login');
    }
    return (
        <div className="HeaderAvatar">
            <a href={"/user/" + user.username + "/posts"}>
                <Avatar image={user.avatar} size="md" />
                <h3>{user.username}</h3>
            </a>
            <button className="btn btn-primary" onClick={logout}>Logout</button>

        </div>
    );
}

export default HeaderAvatar;
