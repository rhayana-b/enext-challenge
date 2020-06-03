import React from 'react';

const DogInfo = ({petName, fontColor, fontFamily}) => {
  return (
    <div className="comp-wrapper">
      <h2 style={{color: fontColor, fontFamily: fontFamily }}>{petName}</h2>
      <img src="https://image.freepik.com/free-photo/portrait-collection-adorable-puppies_53876-64793.jpg" alt="Pet" />
    </div>
  );
}

export default DogInfo;