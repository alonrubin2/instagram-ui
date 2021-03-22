import React, { useState, useEffect } from 'react';
import Avatar from '../Components/Avatar/Avatar';
import environment from '../environments/index';
import { UserService } from '../services/user.service';
import FoundUser from './FoundUser/FoundUser';
import './UserSearch.scss';

function UserSearch() {

    const [value, setValue] = useState('')
    const [foundUsers, setFoundUsers] = useState([]);


    useEffect(() => {
        if (!value) {
            setFoundUsers([])
            return;
        }
        search()
    }, [value]);

    async function search() {
        try {
            setFoundUsers(await UserService.search(value))
        }
        catch (err) {
            console.log(err);
        }
    }

    function hasNoResulats() {
        return foundUsers.length === 0 && value.length > 0;
    }


    return (
        <div className="UserSearch">
            <h2>Search</h2>
            <form className="search-box">
                <input className="form-control"
                    value={value}
                    onChange={(event) => { setValue(event.target.value) }}
                    type="text"
                    placeholder="Search" />
            </form>
            <div className="users-box">
                {foundUsers.map(foundUser => {
                    return <FoundUser 
                    key={foundUser._id} 
                    image={foundUser.avatar} 
                    username={foundUser.username} 
                    createdAt={foundUser.createdAt}
                    bio={foundUser.bio}/>
                })}
            </div>
            {hasNoResulats() && <div className="errMsg"> Sorry, no such user...</div>}
        </div>
    );
}

export default UserSearch;
