import React from "react";
import { Comment } from "../pages/CommentPage";
import CommentItem from "./Comment";

interface CommentsProps {
  comments: Comment[];
  onDeleteComment: (index: number) => void;
}

const Comments: React.FC<CommentsProps> = ({ comments, onDeleteComment }) => {
  return (
    <ul>
      {comments.map((comment, index) => (
        <CommentItem
          key={index}
          comment={comment}
          index={index}
          onDeleteComment={onDeleteComment}
        />
      ))}
    </ul>
  );
};

export default Comments;
