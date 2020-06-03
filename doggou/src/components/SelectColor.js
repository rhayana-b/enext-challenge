import React from 'react';

const SelectColor = ({color, onColorChange}) => {
  return (
    <div className="comp-wrapper">
      <label htmlFor="fontcolor">Selecione uma cor para o texto:</label>

      <select 
        name="fontcolor" 
        id="fontcolor" 
        value={color} 
        onChange={onColorChange}
      >
        <option value="#f70099">Rosa</option>
        <option value="#f03005">Vermelho</option>
        <option value="#0e11e3">Azul</option>
        <option value="#b603fc">Lilás</option>
        <option value="#000000">Preto</option>
      </select>
    </div>
  );
}

export default SelectColor;