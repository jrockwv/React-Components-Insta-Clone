import React from 'react';
import './Comment.css';

const Comment = props => {
  return (
    <div className="comment-text">
      <span className="user">{props.commentData.username}</span>
      {' '}
      <span className="comment">{props.commentData.text}</span>
    </div>
  );
};


export default Comment;
