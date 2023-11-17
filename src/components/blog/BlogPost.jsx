// BlogPost Component

import React from 'react';
import '../../styles/Blog.css'; // Import the CSS file

const BlogPost = ({ post, onPostClick }) => {
  return (
    <div className="card" onClick={() => onPostClick(post.id)}>
      <div className="card-content">
        <h2>{post.title}</h2>
        <p>{post.content.substring(0, 150)}...</p>
      </div>
    </div>
  );
};

export default BlogPost;
