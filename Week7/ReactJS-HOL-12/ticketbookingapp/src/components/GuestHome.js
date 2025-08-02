import React from 'react';
import FlightList from './flights/FlightList';

const GuestHome = () => {
  const flights = [
    { id: 1, route: 'Bhopal → Delhi' },
    { id: 2, route: 'Mumbai → Bangalore' },
    { id: 3, route: 'Chennai → Kolkata' }
  ];
  
  return (
    <div className="guest-home">
      <h2>Welcome, Guest!</h2>
      <p>Please log in to book tickets</p>
      <FlightList flights={flights} showBookButton={false} />
    </div>
  );
};

export default GuestHome;