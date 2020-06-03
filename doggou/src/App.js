import React, { Component } from 'react';
import api from './services/api';
import SelectBreed from './components/SelectBreed';
import BreedInput from './components/BreedInput';
import SelectColor from './components/SelectColor';

const App = () => (
  <div className="App">
    <SelectBreed/>
    <BreedInput/>
    <SelectColor/>
  </div>
);

export default App;
  