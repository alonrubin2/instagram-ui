import React, { useEffect, useState } from 'react';
import { PostService } from '../../services/post.services';
import Comment from './Comment/Comment';
import CommentAdd from './CommentAdd/CommentAdd';
import './Comments.scss';

function Comments({ postId, onCommentAdd }) {


    const [comments, setComments] = useState([]);

    useEffect(() => {
        PostService.getAllComments(postId)
            .then(comments => setComments([...comments]))
    }, []);

    function onCommentAdd(comment) {
        setComments([...comments, comment]);
    }

    return (
        <div className="Comments">
            <div className="add-comment">
                <h3 className="comments-head">Comments</h3>
                <CommentAdd postId={postId}
                    onCommentAdd={onCommentAdd} />
            </div>
            <div className="comment-box">
                {comments.map((comment, index) => {
                    return <Comment key={comment._id}
                        username={comment.user.username}
                        avatar={comment.user.avatar}
                        content={comment.content}
                        createdAt={comment.createdAt} />
                })}
            </div>

        </div>
    );
}

export default Comments;
