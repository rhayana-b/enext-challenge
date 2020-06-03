import React from 'react';

const SelectFont = () => {
  return (
    <div>
      <label for="fonttype">Selecione uma fonte para o texto:</label>

      <select name="fonttype" id="fonttype">
        <option value="Tenali Ramakrishna">Tenali Ramakrishna</option>
        <option value="ArchitArchitects Daughterects">Architects Daughter</option>
        <option value="Piedra">Piedra</option>
        <option value="Kaushan Script">RKaushan Script</option>
        <option value="Roboto">Roboto</option>
      </select>
    </div>
  );
}

export default SelectFont;