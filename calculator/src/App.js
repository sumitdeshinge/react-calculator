import './App.css';
import React from 'react';
import Calculator from './components/Calculator';
import ClassCalculator from './components/ClassCalculator';

function App() {
  //return <Calculator />
  return (
    <div>
      <h1>Calculator using Functional component</h1>
      <Calculator />
      <h1>Calculator using Class component</h1>
      <ClassCalculator />
    </div>
  )
}

export default App;
