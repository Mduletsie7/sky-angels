import React, { useState } from 'react';
import BlogList from './BlogList';
import BlogPost from './BlogPost';

const BlogApp = () => {
  // Example data, replace this with your actual blog posts data
  const initialPosts = [
    { id: 1, title: 'First Post', content: 'Content of the first post.' },
    { id: 2, title: 'Second Post', content: 'Content of the second post.' },
    // Add more posts as needed
  ];

  const [selectedPost, setSelectedPost] = useState(null);

  const handlePostClick = (postId) => {
    const post = initialPosts.find((p) => p.id === postId);
    setSelectedPost(post);
  };

  return (
    <div>
      {selectedPost ? (
        <BlogPost post={selectedPost} />
      ) : (
        <BlogList posts={initialPosts} onPostClick={handlePostClick} />
      )}
    </div>
  );
};

export default BlogApp;
