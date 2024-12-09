import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const BlogPostDetailComponent = () => {
  const [post, setPost] = useState<Post>();
  const { postId } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => response.json())
      .then((data) => setPost(data))
      .catch((error) => console.log(error));
  }, [postId]);
  if (!post) return <h1>Loading...</h1>;

  return (
    <>
      <div key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    </>
  );
};

export default BlogPostDetailComponent;
