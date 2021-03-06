// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
const [comments, setComments] = useState()
  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {props.comments.map(commentsMap => {
        return <div>
          <Comment commentData={commentsMap}/>
          </div>
      })}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
