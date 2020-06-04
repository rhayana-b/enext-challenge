import React from 'react';

const SelectFont = ({fontFamily, onFontChange}) => {
  return (
    <div className="comp-wrapper">
      <label htmlFor="fonttype">Selecione uma fonte para o texto:</label>

      <select 
        name="fonttype" 
        id="fonttype" 
        onChange={onFontChange}
        value={fontFamily ? fontFamily : '--'}
      >
        <option value="--" disabled>--</option>
        <option value="Tenali Ramakrishna">Tenali Ramakrishna</option>
        <option value="Righteous">Righteous</option>
        <option value="Piedra">Piedra</option>
        <option value="Kaushan Script">RKaushan Script</option>
        <option value="Monoton">Monoton</option>
      </select>
    </div>
  );
}

export default SelectFont;