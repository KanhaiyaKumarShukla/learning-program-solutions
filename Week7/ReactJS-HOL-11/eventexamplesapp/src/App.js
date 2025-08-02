import React, { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <h1>React Event Handling Examples</h1>
      <EventExamples />
      <hr />
      <h2>Currency Converter</h2>
      <CurrencyConvertor />
    </div>
  );
}

function EventExamples() {
  const [counter, setCounter] = useState(0);
  const [message, setMessage] = useState('');
  const [popup, setPopup] = useState({ show: false, message: '' });

  const showPopup = (msg) => {
    setPopup({ show: true, message: msg });
    setTimeout(() => setPopup({ show: false, message: '' }), 2000);
  };

  const handleIncrement = () => {
    setCounter(counter + 1);
    sayHello();
    showPopup('Counter increased!');
  };

  const handleDecrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
      showPopup('Counter decreased!');
    } else {
      showPopup('Counter cannot go below zero!');
    }
  };

  const sayHello = () => {
    setMessage('Hello! Counter increased.');
  };

  const sayMessage = (msg) => {
    setMessage(msg);
    showPopup(`${msg} message shown!`);
  };

  const handleClick = (e) => {
    setMessage('I was clicked!');
    showPopup('Button clicked! Synthetic event handled.');
    console.log('Synthetic event:', e);
  };

  return (
    <div className="event-examples">
      <h2>Event Handling Examples</h2>
      
      <div className="counter-section">
        <p>Counter Value: <strong>{counter}</strong></p>
        <button onClick={handleIncrement}>
          Increment (+)
        </button>
        <button onClick={handleDecrement}>
          Decrement (-)
        </button>
      </div>

      <div className="message-section">
        <p>Message: <strong>{message}</strong></p>
        <button onClick={() => sayMessage('Welcome!')}>
          Say Welcome
        </button>
        <button onClick={handleClick}>
          Trigger Click Event
        </button>
      </div>
      
      {popup.show && (
        <div className="popup">
          <div className="popup-content">
            <p>{popup.message}</p>
          </div>
        </div>
      )}
    </div>
  );
}

function CurrencyConvertor() {
  const [rupees, setRupees] = useState('');
  const [euros, setEuros] = useState('');
  const [popup, setPopup] = useState({ show: false, message: '' });
  const conversionRate = 0.011; 
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!rupees || parseFloat(rupees) <= 0) {
      setPopup({ show: true, message: 'Please enter a valid amount!' });
      setTimeout(() => setPopup({ show: false, message: '' }), 2000);
      return;
    }
    
    const converted = parseFloat(rupees) * conversionRate;
    setEuros(converted.toFixed(2));
    
    setPopup({ 
      show: true, 
      message: `Converted ₹${rupees} to €${converted.toFixed(2)}`
    });
    setTimeout(() => setPopup({ show: false, message: '' }), 3000);
  };

  return (
    <div className="converter">
      <form onSubmit={handleSubmit}>
        <label>
          Indian Rupees (₹):
          <input
            type="number"
            value={rupees}
            onChange={(e) => setRupees(e.target.value)}
            placeholder="Enter amount in INR"
            min="0"
            step="0.01"
          />
        </label>
        
        <button type="submit">Convert to Euro</button>
      </form>

      {euros && (
        <div className="result">
          <h3>Conversion Result:</h3>
          <p>₹ {rupees} = € {euros}</p>
        </div>
      )}
      
   
      {popup.show && (
        <div className="popup">
          <div className="popup-content">
            <p>{popup.message}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;