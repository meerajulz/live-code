import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BlogListComponent = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.log(error));
  });
  if (!posts.length) return <h1>Loading...</h1>;

  return (
    <div>
      <h1>Blog List</h1>
      {posts.map((post) => {
        const { title, body, id } = post;
        return (
          <div key={id}>
            <h2>{title}</h2>
            <p>{body}</p>
            <Link to={`/post/${id}`}>Read more</Link>
          </div>
        );
      })}
    </div>
  );
};

export default BlogListComponent;
