import React from 'react';

const SelectColor = () => {
  return (
    <div>
      <label for="fontcolor">Selecione uma cor para o texto:</label>

      <select name="fontcolor" id="fontcolor">
        <option value="#dd2d4a">Rosa</option>
        <option value="#931621">Vermelho</option>
        <option value="#0b0033">Azul</option>
        <option value="#451f55">Roxo</option>
        <option value="#000000">Preto</option>
      </select>
    </div>
  )
}

export default SelectColor;