import React from 'react';
import FlightList from './flights/FlightList';

const UserHome = () => {
  const flights = [
    { id: 1, route: 'Bhopal → Delhi' },
    { id: 2, route: 'Mumbai → Bangalore' },
    { id: 3, route: 'Chennai → Kolkata' }
  ];
  
  return (
    <div className="user-home">
      <h2>Welcome, User!</h2>
      <p>You can now book your tickets</p>
      <FlightList flights={flights} showBookButton={true} />
    </div>
  );
};

export default UserHome;