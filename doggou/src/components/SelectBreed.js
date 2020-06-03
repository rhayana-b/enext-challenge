import React, { useState, useEffect } from 'react';
import api from '../services/api';

const SelectBreed = () => {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    api.get('breeds/list/all').then(response => {
      const allBreeds = response.data.message;
      setBreeds(Object.keys(allBreeds)); 
    }).catch(error => {
      console.log(error);
    });
  }, []);

  const renderOptions = () => {
    return breeds.map(breed => (
      <option key={breed} value={breed}>
        { breed.charAt(0).toUpperCase() + breed.slice(1) }
      </option>
    ));
  }

  return (
    <div className="comp-wrapper">
    <label htmlFor="breeds">Selecione uma raça:</label>

    <select name="breeds" id="breeds" defaultValue="--">
      <option value="--" disabled>--</option>
      { renderOptions() }
    </select>
    </div>
  );
}

export default SelectBreed;
  