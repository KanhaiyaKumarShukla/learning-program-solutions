import React from 'react';

const ContentRenderer = ({ 
  condition, 
  renderContent, 
  renderFallback = () => <p>No data available</p> 
}) => {
  return condition ? renderContent() : renderFallback();
};

export default ContentRenderer;