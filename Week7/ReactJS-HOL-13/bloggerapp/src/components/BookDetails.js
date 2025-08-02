import React from 'react';

const BookDetails = ({ books }) => {

    if (!books || books.length === 0) {
    return <p>No books available</p>;
  }

  return (
    <div className="book-details">
      <h2>Book Details</h2>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <h3>{book.bname}</h3>
            
            <p className={book.price > 500 ? 'expensive' : 'affordable'}>
              Price: ₹{book.price} 
              {book.price > 500 ? ' (Premium)' : ' (Budget)'}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookDetails;