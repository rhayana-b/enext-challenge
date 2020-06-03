import React from 'react';

const NameInput = () => {
  return (
    <div className="comp-wrapper">
      <form action="">
        <label for="petname">Insira o nome do Pet:</label>
        <input type="text" id="petname" name="petname"/>
      </form> 
    </div>
  );
}

export default NameInput;