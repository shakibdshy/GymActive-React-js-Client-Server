import React from 'react';
import { useParams } from 'react-router-dom';

const BlogItem = () => {
  const { title } = useParams();

  return (
    <section>
      <h1>Blog Title Name: {title}</h1>
    </section>
  );
};

export default BlogItem;