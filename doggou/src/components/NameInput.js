import React from 'react';

const NameInput = (petName = "", onNameChange) => {
  return (
    <div className="comp-wrapper">
      <form action="">
        <label htmlFor="petname">Insira o nome do Pet:</label>
        <input
          type="text"
          id="petname" 
          name="petname" 
          value={petName} 
          onChange={onNameChange}
        />
      </form> 
    </div>
  );
}

export default NameInput;