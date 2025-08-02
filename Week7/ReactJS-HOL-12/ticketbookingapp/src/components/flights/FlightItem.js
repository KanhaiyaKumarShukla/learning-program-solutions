import React from 'react';

const FlightItem = ({ flight, showBookButton }) => {
  return (
    <li className="flight-item">
      <div className="flight-route">✈️ {flight.route}</div>
      {showBookButton && (
        <button 
          className="book-button"
          onClick={() => alert(`Booking confirmed for ${flight.route}!`)}
        >
          Book Now
        </button>
      )}
    </li>
  );
};

export default FlightItem;