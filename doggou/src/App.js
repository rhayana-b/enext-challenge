import React, { Component } from 'react';
import api from './services/api';
import SelectBreed from './components/SelectBreed';
import BreedInput from './components/BreedInput';
import SelectColor from './components/SelectColor';
import SelectFont from './components/SelectFont';

const App = () => (
  <div className="App">
    <SelectBreed/>
    <BreedInput/>
    <SelectColor/>
    <SelectFont/>
  </div>
);

export default App;
  