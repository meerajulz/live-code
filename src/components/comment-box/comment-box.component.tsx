import React, { useState } from 'react';

interface Comment {
  id: number;
  comment: string;
}

const CommentBox = () => {
  //**Add Comments**
  // /**Dynamic List Update**/

  const [comments, setComments] = useState<Comment[]>([]);
  const [comment, setComment] = useState('');

  const handleAddComments = () => {
    const newComment = {
      id: comments.length + 1,
      comment,
    };

    setComments([...comments, newComment]);
    setComment('');
  };

  console.log(comments);

  return (
    <div>
      <h1>Comments</h1>
      <textarea
        value={comment}
        placeholder="Add a comment"
        onChange={(e) => setComment(e.target.value)}
      />
      <br />
      <button onClick={handleAddComments}>Add Comment</button>

      <section>
        {comments.map((comment) => (
          <div key={comment.id}>
            <p>{comment.comment}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default CommentBox;
