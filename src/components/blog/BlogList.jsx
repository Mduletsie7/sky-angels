// BlogList Component

import React from 'react';
import '../../styles/Blog.css'; // Import the CSS file

const BlogList = ({ posts, onPostClick }) => {
  return (
    <div className="container">
      <h2>Latest Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id} onClick={() => onPostClick(post.id)}>
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
