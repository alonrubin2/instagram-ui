import Cookies from 'js-cookie';
import environment from '../environments/index';


export class UserService {

    static getToken() {
        return Cookies.get('top-user');
    }

    static me() {
        return fetch(environment.apiUrl + '/user/me', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: UserService.getToken()
            }
        })
            .then(res => {
                if (res.status !== 200) {
                    return null;
                }
                console.log(res);
                return res.json();
            });
    }

    static login(values) {
        return fetch(environment.apiUrl + '/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        })
    }

    static create(values) {
        fetch(environment.apiUrl + '/user', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        })
    }

    static async edit(values) {
        const user = JSON.parse(atob(UserService.getToken().split('.')[1]));
        const data = new FormData();
        data.append('image', values.image);
        data.append('username', values.username);
        data.append('email', values.email);
        data.append('bio', values.bio);

        const edditedUser = await fetch(environment.apiUrl + `/user/edit/${user._id}`, {
            method: 'POST',
            headers: {
                'authorization': UserService.getToken()
            },
            body: data
        })
        return edditedUser.json();
    }

    static async getUserDetails(username) {
        try {
            const user = await fetch(environment.apiUrl + `/user/${username}`, {
                headers: {
                    Authorization: UserService.getToken()
                }
            });
            return user.json()
        }
        catch (err) {
            console.log(err);
        }
    }

    static async search(username) {
        const users = await fetch(environment.apiUrl + '/user?username=' + username, {
            headers: {
                Authorization: UserService.getToken()
            }
        });
        return users.json()
    }

    static async findOneUser(username) {
        const user = await fetch(environment.apiUrl + '/user?username=' + username, {
            headers: {
                Authorization: UserService.getToken()
            }
        });
        return user.json()
    }



    static async follow(id) {
        const follow = await fetch(environment.apiUrl + `/user/${id}/follow`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: UserService.getToken()
            }
        });
        const res = await follow.json()
        return res;
    }

    static async unfollow(followerId) {
        console.log(followerId);
        const unfollow = await fetch(environment.apiUrl + `/user/${followerId}/unfollow`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: UserService.getToken()
            }
        });
        const res = await unfollow.json()
        return res;
    }


}


