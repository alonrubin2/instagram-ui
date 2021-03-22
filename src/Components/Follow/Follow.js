import React, { useContext, useEffect, useState } from 'react';
import { UserService } from '../../services/user.service';
import { UserContext } from '../../user-context';
import './Follow.scss';


const Follow = ({ userId }) => {


    const { user } = useContext(UserContext);
    const myId = user._id;
    const [follow, setFollow] = useState(null)


    async function toggleFollow() {
        try {
            if (!follow) {
                await UserService.follow(userId);
                setFollow(true);
                return
            }
            await UserService.unfollow(userId);
            setFollow(false);

        } catch (err) {
            console.log(err)
        }
    }

    function isOwnProfile() {
        if (myId !== userId) {
            return false
        }
        return true
    }



    return (<> { !isOwnProfile() &&
                    <div className="Follow">
                        {
                            <button onClick={toggleFollow} className="btn follow-button">
                                {!follow ? "Follow" : "Unfollow"}
                            </button>
                        }
                    </div>
                }
            </>
    );
}

export default Follow;
