import React, { useState } from 'react';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';
import ContentRenderer from './components/ContentRenderer';
import { books, blogs, courses } from './data/data';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('all');
  
  const tabs = [
    { id: 'all', label: 'All Content' },
    { id: 'books', label: 'Books Only' },
    { id: 'blogs', label: 'Blogs Only' },
    { id: 'courses', label: 'Courses Only' },
  ];

  const tabComponents = {
    books: <BookDetails books={books} />,
    blogs: <BlogDetails blogs={blogs} />,
    courses: <CourseDetails courses={courses} />,
    all: (
      <>
        <BookDetails books={books} />
        <BlogDetails blogs={blogs} />
        <CourseDetails courses={courses} />
      </>
    )
  };

  return (
    <div className="app">
      <h1>Blogger App</h1>
      
      <div className="tabs">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={activeTab === tab.id ? 'active' : ''}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      
      {tabComponents[activeTab]}

      <div className="divider" />

      
      <h2>Featured Content</h2>
      <ContentRenderer
        condition={books.length > 0}
        renderContent={() => (
          <div className="featured">
            <h3>Featured Book: {books[0].bname}</h3>
            <p>Special Price: ₹{books[0].price - 50}</p>
          </div>
        )}
      />
    </div>
  );
}

export default App;