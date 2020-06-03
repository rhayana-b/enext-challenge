import React from 'react';

const SelectFont = ({onFontChange}) => {
  return (
    <div className="comp-wrapper">
      <label htmlFor="fonttype">Selecione uma fonte para o texto:</label>

      <select 
        name="fonttype" 
        id="fonttype" 
        onChange={onFontChange}
        defaultValue="--"
      >
        <option value="--" disabled>--</option>
        <option value="Tenali Ramakrishna">Tenali Ramakrishna</option>
        <option value="ArchitArchitects Daughterects">Architects Daughter</option>
        <option value="Piedra">Piedra</option>
        <option value="Kaushan Script">RKaushan Script</option>
        <option value="Monoton">Monoton</option>
      </select>
    </div>
  );
}

export default SelectFont;