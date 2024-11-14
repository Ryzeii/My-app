import React, { useState, useEffect, useCallback } from "react";
import TextInput from "../component/TextInput";
import Textarea from "../component/TextArea";
import Button from "../component/Button";
import Comments from "../component/Comments";

export interface Comment {
  author: string;
  text: string;
  time: string;
}

const CommentPage: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [author, setAuthor] = useState<string>("");
  const [text, setText] = useState<string>("");

  useEffect(() => {
    const Comments = localStorage.getItem("comments");
    if (Comments) {
      setComments(JSON.parse(Comments));
    }
  }, []);

  const CommentsToLocalStorage = useCallback(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  useEffect(() => {
    CommentsToLocalStorage();
  }, [comments, CommentsToLocalStorage]);

  const onAddComment = () => {
    if (author.trim() && text.trim()) {
      const newComment: Comment = {
        author,
        text,
        time: new Date().toLocaleString(),
      };
      setComments([...comments, newComment]);
      setAuthor("");
      setText("");
    }
  };

  const onDeleteComment = (index: number) => {
    setComments((prevComments) => prevComments.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>Комментарии</h2>
      <Comments comments={comments} onDeleteComment={onDeleteComment} />
      <TextInput placeholder="Ваше имя" value={author} onChange={setAuthor} />
      <br />
      <br />
      <Textarea placeholder="Ваш комментарий" value={text} onChange={setText} />
      <br />
      <br />
      <Button onClick={onAddComment}>Добавить комментарий</Button>
    </div>
  );
};

export default CommentPage;
