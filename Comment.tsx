import React from "react";
import Button from "./Button";
import { Comment as CommentType } from "../pages/CommentPage";

interface CommentProps {
  comment: CommentType;
  index: number;
  onDeleteComment: (index: number) => void;
}

const Comment: React.FC<CommentProps> = ({
  comment,
  index,
  onDeleteComment,
}) => {
  return (
    <li>
      <p>
        <b>Автор:</b> {comment.author}
      </p>
      <p>{comment.text}</p>
      <p>
        <b>Дата:</b> {comment.time}
      </p>
      <Button onClick={() => onDeleteComment(index)}>Удалить</Button>
    </li>
  );
};

export default Comment;
