import React from 'react';
import { useParams } from 'react-router-dom';

const BlogItem = () => {
  const { title } = useParams();

  return (
    <div>
      <h1>Blog Title Name: {title}</h1>
    </div>
  );
};

export default BlogItem;