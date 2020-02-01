// You will add code in this file

import React, {useState} from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";

const Post = props => {
  // set up state for the likes
const [likes, setLikes] = useState()
  return (
    <div className="post-border">
      <PostHeader
        username={props.postData.username}
        thumbnailUrl={
          props.postData.thumbnailUrl
        }
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.postData.imageUrl}
        />
      </div>
      <LikeSection />
      <CommentSection
        postId={props.postData.imageUrl}
        comments={props.postData.comments}
      />
    </div>
  );
};

export default Post;
