import React from 'react';


const SelectBreed = () => {
  return (
    <div className="comp-wrapper">
    <label for="breeds">Selecione uma raça:</label>

    <select name="breeds" id="breeds">
      <option value="poodle">Poodle</option>
      <option value="akita">akita</option>
    </select>
    </div>
  );
}

export default SelectBreed;
  