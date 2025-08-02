import React from 'react';
import GuestHome from '../GuestHome';
import UserHome from '../UserHome';

const Greeting = ({ isLoggedIn }) => {
  return isLoggedIn ? <UserHome /> : <GuestHome />;
};

export default Greeting;