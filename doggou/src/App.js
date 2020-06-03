import React, { Component } from 'react';
import api from './services/api';
import SelectBreed from './components/SelectBreed';
import BreedInput from './components/BreedInput';

const App = () => (
  <div className="App">
    <SelectBreed/>
    <BreedInput/>
  </div>
);

export default App;
  