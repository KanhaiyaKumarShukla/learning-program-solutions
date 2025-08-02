import React from 'react';
import FlightItem from './FlightItem';

const FlightList = ({ flights, showBookButton }) => {
  return (
    <ul className="flight-list">
      {flights.map(flight => (
        <FlightItem 
          key={flight.id} 
          flight={flight} 
          showBookButton={showBookButton} 
        />
      ))}
    </ul>
  );
};

export default FlightList;