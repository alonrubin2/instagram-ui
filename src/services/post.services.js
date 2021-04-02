import environment from "../environments";
import { UserService } from "./user.service";

export class PostService {

    static async feed() {
        const res = await fetch(environment.apiUrl + '/post?sort=-1', {
            headers: {
                Authorization: UserService.getToken()
            }
        });
        const json = await res.json();
        return json;
        
    }

    static async getOnePost(id) {
        try {
            const post = await fetch(environment.apiUrl + '/post/' + id, {
                headers: {
                    Authorization: UserService.getToken()
                }
            });
            return post.json()
        }
        catch (err) {
            console.log(err);
        }

    }

    static async getUserPosts(username) {
        try {
            const posts = await fetch(environment.apiUrl + `/user/${username}/posts`, {
                headers: {
                    Authorization: UserService.getToken()
                }
            })
            return posts.json()
        }
        catch (err) {
            console.log(err);
        }
    }


    static async like(id) {
        const like = await fetch(environment.apiUrl + `/post/${id}/like`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: UserService.getToken()
            }
        });
        const res = await like.json()
        return res;
    }

    static async unLike(postId, userId) {
        console.log(postId, userId);
        const unLike = await fetch(environment.apiUrl + `/post/${postId}/like/${userId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: UserService.getToken()
            }
        });
        const res = await unLike.json()
        return res;
    }

    static async addComment(postId, content) {
        const comment = await fetch(environment.apiUrl + `/post/${postId}/comment`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: UserService.getToken()
            },
            body: JSON.stringify({ content })
        })
        return comment.json();
    }

    static getAllComments(postId) {
        return fetch(environment.apiUrl + `/post/${postId}/comment?sort=-1`, {
            headers: {
                Authorization: UserService.getToken()
            }
        })
            .then(res => res.json());
    }


}