import React from 'react';

const CourseDetails = ({ courses }) => {
  const renderCourses = (() => {
    if (courses.length === 0) {
      return <p>No courses available</p>;
    }
    
    return (
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            <h3>{course.cname}</h3>
            <p>Duration: {course.duration}</p>
            
            
            {(() => {
              switch(course.cname) {
                case 'React Fundamentals':
                  return <p className="highlight">Popular course!</p>;
                case 'Advanced JavaScript':
                  return <p className="highlight">Advanced level</p>;
                default:
                  return null;
              }
            })()}
          </li>
        ))}
      </ul>
    );
  })();

  return (
    <div className="course-details">
      <h2>Course Details</h2>
      {renderCourses}
    </div>
  );
};

export default CourseDetails;