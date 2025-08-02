import React, { useState } from 'react';

const BlogDetails = ({ blogs }) => {
  const [showDetails, setShowDetails] = useState(true);
  
  let blogContent;
  if (showDetails && blogs.length > 0) {
    blogContent = (
      <ul>
        {blogs.map(blog => (
          <li key={blog.id}>
            <h3>{blog.title}</h3>
            <p>{blog.content}</p>
          </li>
        ))}
      </ul>
    );
  } else if (blogs.length === 0) {
    blogContent = <p>No blogs available</p>;
  } else {
    blogContent = <p>Details hidden. Click "Show" to view.</p>;
  }

  return (
    <div className="blog-details">
      <h2>Blog Details</h2>
      <div className="controls">
        <button onClick={() => setShowDetails(!showDetails)}>
          {showDetails ? 'Hide' : 'Show'} Blogs
        </button>
      </div>
      
      {blogContent}
      
      
      {blogs.length > 0 && showDetails && (
        <p className="info">Total blogs: {blogs.length}</p>
      )}
    </div>
  );
};

export default BlogDetails;