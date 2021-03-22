import React, { useContext } from 'react';
import { useEffect, useState } from 'react';
import { UserService } from '../../services/user.service';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../user-context';
import Avatar from '../../Components/Avatar/Avatar';

import './ProfileHeader.scss';
import Follow from '../../Components/Follow/Follow';

function ProfileHeader({ username, postNum }) {


    const [viewedUser, setViewedUser] = useState({})
    // const { username } = useParams();
    const [isUser, setIsUser] = useState(false);
    const { user } = useContext(UserContext);


    console.log(viewedUser)
    console.log(user)
    console.log(isUser)
    console.log(username)

    useEffect(async () => {
        async function getUser() {
            try {
                const viewedUser = await UserService.getUserDetails(username);
                setViewedUser(viewedUser);
                console.log(username)

                if (username === user.username) {
                    console.log(username)

                    setIsUser(true);
                    return;
                }
                console.log(viewedUser)
                console.log(user)
                console.log(isUser)

            } catch (err) {
                console.log(err)
            }
        }
        getUser()
    }, [username, user]);


    console.log(isUser)

    return (
        <div className="ProfileHeader">
            <Avatar className="user-avatar" size="lg" image={viewedUser.avatar} />
            <div className="user-post-num">
                <h3>{username}</h3>
                <h4>{postNum} posts</h4>
                <h4>{viewedUser?.followers?.length} Followers</h4>
            </div>
            <p className="bio">{viewedUser.bio}</p>
            <Follow userId={viewedUser._id} />
            {/* <button onClick={follow}>Follow</button> */}

            {isUser && <a href='/user/edit'>Edit Profile</a>}



        </div>
    );
}

export default ProfileHeader;
