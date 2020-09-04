import React from 'react';
import './App.css';
import DisplayMain from './components/presentational/DisplayMain';

console.log(process.env.REACT_APP_OWM_API_KEY)

function App() {
  return (
    <div className="App">
      <DisplayMain />
    </div>
  );
}

export default App;
