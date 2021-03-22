import React, { useState, useContext } from 'react';
import { PostService } from '../../../services/post.services';
import Avatar from '../../Avatar/Avatar';
import {UserContext} from '../../../user-context';
import './CommentAdd.scss';

function CommentAdd({ postId, onCommentAdd }) {

    const [content, setContent] = useState('')
    const { user } = useContext(UserContext);


    async function submitComment(e) {
        try {
            e.preventDefault();
            const comment = await PostService.addComment(postId, content);
            setContent('')
            onCommentAdd(comment)
        }
        catch (err) {
            console.log(err);
        }
    }




    return (
        <div className="CommentAdd">
            <form onSubmit={submitComment}>
                <div className="avatar-comment">
                    <Avatar size="sm" image={user.avatar}/>
                    <textarea className="form-control comment-input"
                        type="textarea"
                        onChange={(e) => setContent(e.target.value)}
                        value={content}>
                        {content}
                    </textarea>
                </div>
                <button className="btn btn-success" type="submit">Submit</button>
            </form>
        </div>
    );
}

export default CommentAdd;
