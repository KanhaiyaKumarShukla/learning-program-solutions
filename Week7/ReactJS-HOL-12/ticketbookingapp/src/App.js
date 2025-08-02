import React, { useState } from 'react';
import LoginButton from './components/auth/LoginButton';
import LogoutButton from './components/auth/LogoutButton';
import Greeting from './components/auth/Greeting';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    const user = prompt('Enter your username:');
    if (user) {
      setUsername(user);
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>✈️ AirTicket Booking</h1>
        <div className="auth-section">
          {isLoggedIn ? (
            <>
              <span className="welcome-text">Welcome, {username}</span>
              <LogoutButton onClick={handleLogout} />
            </>
          ) : (
            <LoginButton onClick={handleLogin} />
          )}
        </div>
      </header>
      
      <main>
        <Greeting isLoggedIn={isLoggedIn} />
      </main>
      
      <footer className="app-footer">
        <p>© 2023 AirTicket Booking. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;