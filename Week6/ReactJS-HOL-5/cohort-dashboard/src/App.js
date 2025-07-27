import React from 'react';
import CohortDetails from './components/CohortDetails';
import { CohortsData } from './models/Cohort';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Cohorts Details</h1>
      <div>
        {CohortsData.map((cohort, index) => (
          <CohortDetails 
            key={index}
            cohort={{
              name: `${cohort.cohortCode} - ${cohort.technology}`,
              startDate: cohort.startDate,
              status: cohort.currentStatus,
              coach: cohort.coachName,
              trainer: cohort.trainerName
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default App;