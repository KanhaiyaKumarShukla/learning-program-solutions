import React from 'react';
import CalculateScore from './Components/CalculateScore';
import './App.css';

function App() {
  return (
    <div>
      <CalculateScore 
        Name={"Steve"}
        School={"DNV Public School"}
        total={300}
        goal={284}
      />
    </div>
  );
}

export default App;